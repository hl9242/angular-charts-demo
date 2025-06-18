import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartType } from 'ag-grid-community';
import { ChartData, ChartConfiguration, ChartEvent, ChartOptions } from 'chart.js';
import { ChartPopupComponent } from './chartPop-up/chart-popup.component';
import { jsonData } from './jsonData';
import { Router } from '@angular/router';
import { PspDashboardService } from './services/psp-dashboard.service';
import { PspDashboardPopupComponent } from './psp-dashboard-popup/psp-dashboard-popup.component';


export interface TableData {
  // appId: string,
  cio: string,
  sourceDatacenter: string,
  targetDatacenter: string,
  total: number,
  data: TableData[],
  sourceEnvDescription: string,
  migrationGroup: string,
  sourceCluster: string,
  targetCluster: string,
}

export interface LeadershipTableData {
  // appId: string,
  cio: string,
  sourceDatacenter: string,
  targetDatacenter: string,
  total: number,
  level: number,
  expandable: boolean,
  sourceEnvDescription: string,
  migrationGroup: string,
  sourceCluster: string,
  targetCluster: string,
}

@Component({
  selector: 'app-psp-dashboard',
  templateUrl: './psp-dashboard.component.html',
  styleUrl: './psp-dashboard.component.scss'
})
export class PspDashboardComponent {
  isLoading: boolean = false;
  openFilter: boolean = false;
  filterList: any = [];
  filters: {
    // appId: string,
    appName: string,
    cio: string[],
    status: string,
    startDate: string,
    endDate: string,
    filterBy: string,
  } = {
      // appId: "",
      appName: "",
      cio: [],
      startDate: "",
      endDate: "",
      status: "",
      filterBy: "migrationGroup",
    };
  
  pieChartDatas: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [],
  };
  constructor(private pspDashboardService: PspDashboardService, private router: Router, private dialog: MatDialog) {
    // jsonData.pspStatusResponseList.forEach((item) => {
    //   const cio = item.cio || 'Unknown';
    //   this.cioCounts[cio] = (this.cioCounts[cio] || 0) + 1;
    // });
  }

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    borderColor: "gray",
    cutout: '85%',
    onClick: this.labelDataCenterClicked.bind(this),
    layout: {
      padding: 10
    },
    plugins: {
      legend: {
        display: true,
        position: "right"
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        align: "end",
        anchor: 'end',
        padding:{
          top: 0,
          bottom: 0
        },
        clamp: true,
        clip: false,
        color: "#000",
        display: true,
        font: {
          size: 12
        }
      },
    }
  }

  ChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: true,
        position: "right"
      },
      tooltip: {
        enabled: true
      },
      datalabels: {
        align: "top",
        font: {
          size: 12
        }
      }
    },
    onClick: this.labelDataCenterClicked.bind(this),
  }

  displayedColumns: string[] = ["expand", "cio", "sourceHostName", "sourceModelName", "sourceDatacenter", "targetHostName", "targetDatacenter", "targetCluster", "targetCluster", "migrationGroup", "migrationStatus", "total"];
  tableDataSource: any[] = [];
  graphData: any[] = [];
  barChartData: ChartData<'bar'>;
  barChartHostDistributionData: ChartData<'bar'>;

  ngOnInit(): void {
    // const cioCounts: { [key: string]: number } = {};

    // // Loop through JSON data
    // jsonData.pspStatusResponseList.forEach((item) => {
    //   const cio = item.cio || 'Unknown';
    //   cioCounts[cio] = (cioCounts[cio] || 0) + 1;
    // });

    // // Assign to chart properties
    // const labels = Object.keys(cioCounts);
    // const data = Object.values(cioCounts);

    //   this.pieChartDatas = {
    //     labels: labels,
    //     datasets: [
    //       {
    //         data: data,
    //         label: 'CIO Count',
    //       },
    //     ],
    //   };
      let req = {
        // "appId":[],
        "cio":[],
        // "sourceHostName":[],
        // "sourceModelName":[],
        // "sourceDatacenter":[],
        // "targetHostName":[],
        // "targetCluster":[],
        // "migrationGroup":[],
        // "targetDatacenter":[]
        "targetDate":[],
        "targetPlatform":[],
        "primaryAppId":[],
        "primaryAppName":[],
        "sourceHostName":[],
        "sourceModelName":[],
        "sourceDatacenter":[],
        "targetHostName":[],
        "targetEnvironment":[],
        "targetDatacenter":[],
        "targetCluster":[],
        "targetRack":[],
        "migrationGroup":[],
      };
    this.getTableData(req);
  }

  getTableData(req: any) {
    this.isLoading = true;
    // this.tableDataSource = this.v2vDashboardService.getV2vDashboardData(req, this.filters);
    this.pspDashboardService.getPspDashboardData(req, this.filters).subscribe({
      next: (data: any) => {
        console.log(data)
        this.graphData = data.graphData;
        this.tableDataSource = data.tableData;
        this.filterList = [];
        let totalCount = 0;
        Object.keys(data.filter).forEach((key) =>{
          totalCount += data.filter[key];
          this.filterList.push({name: key, value: data.filter[key]})
        })
        this.filterList.push({name: "Total", value: totalCount})
      },
      error: (error) => { console.error("error while fetching table chart data", error); },
      complete: () => { this.isLoading = false; }
    });
  }

  splitString(input: string, dl: string): string[] {
    return input.split(dl);
  }

  labelDataCenterClicked(event: any, elements: any, chart: any){
    // this.router.navigate(['/v2vintake'],{ queryParams: { cio: chart.data.labels[elements[0]['index']] }})
    const dialogRef = this.dialog.open(PspDashboardPopupComponent, {
      width: "72%",
      height: "85%",
      data: { header: { name : chart ? chart.data.labels[elements[0]['index']] : event, count: chart ? chart.data.datasets[0].data[elements[0]['index']]: elements}, dataSource: this.tableDataSource, filter: {name: this.filters.filterBy, value: chart ? chart.data.labels[elements[0]['index']]: event}},
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  searchWithFilters(){
    console.log(this.filters)
    if(this.filters.filterBy !== 'targetDate' && this.filters.startDate && this.filters.endDate){
      this.filters.startDate = "";
      this.filters.endDate = "";
    }
    this.ngOnInit();
    this.openFilter = false;
  }

  onGraphTypeChange(type: any){
    this.ChartOptions.plugins.legend.position = (type == 'doughnut' || type == 'pie') ? 'right': 'top';
    return this.ChartOptions
  }

  // title = 'Angular Charts Demo';

  // barChartLabels: string[] = Object.keys(this.cioCounts);
  // barChartDatas: number[] = Object.values(this.cioCounts);
  // pieChartsColors = [
  //   {
  //     backgroundColor: [
  //       '#4285F4',
  //       '#DB4437',
  //       '#F4B400',
  //       '#0F9D58',
  //       '#AB47BC',
  //       '#8E24AA',
  //     ],
  //   },
  // ];
  // Line Chart
  // public lineChartData: ChartConfiguration['data'] = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [
  //     {
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       label: 'Series A',
  //       borderColor: 'rgba(75, 192, 192, 1)',
  //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //       tension: 0.4,
  //       fill: true,
  //     },
  //     {
  //       data: [28, 48, 40, 19, 86, 27, 90],
  //       label: 'Series B',
  //       borderColor: 'rgba(153, 102, 255, 1)',
  //       backgroundColor: 'rgba(153, 102, 255, 0.2)',
  //       tension: 0.4,
  //       fill: true,
  //     },
  //   ],
  // };

  // public lineChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Monthly Sales Data',
  //     },
  //   },
  // };

  // public lineChartType: ChartType = 'line';

  // Bar Chart
  // public barChartData: ChartConfiguration['data'] = {
  //   labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  //   datasets: [
  //     {
  //       data: [542, 1200, 786, 1500],
  //       label: 'Revenue',
  //       backgroundColor: 'rgba(54, 162, 235, 0.5)',
  //       borderColor: 'rgba(54, 162, 235, 1)',
  //       borderWidth: 1,
  //     },
  //     {
  //       data: [300, 700, 450, 900],
  //       label: 'Expenses',
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //       borderColor: 'rgba(255, 99, 132, 1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // public barChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   onClick: this.onChartClick.bind(this),
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'CIO charts',
  //     },
  //   },
  // };

  onChartClick(event: ChartEvent, activeElements: any[]) {
    if (activeElements.length > 0) {
      const chartElement = activeElements[0];
      const datasetIndex = chartElement.datasetIndex;
      const dataIndex = chartElement.index;

      const label = this.barChartData.labels?.[dataIndex];
      const value = this.barChartData.datasets[datasetIndex].data[dataIndex];

      console.log(`Clicked bar - Label: ${label}, Value: ${value}`);
      this.dialog.open(ChartPopupComponent, {
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '200ms',
        hasBackdrop: true, 
        backdropClass: 'dialog-backdrop',
        panelClass: 'custom-dialog-container',
        data: {
          title: 'Bar Click Details',
          items: [
            { key: 'Label', value: label },
            { key: 'Value', value: value },
          ],
        },
      });
    }
  }

  public barChartType: ChartType = 'bar';

  // Pie Chart
  public pieChartData: ChartConfiguration['data'] = {
    labels: this.pieChartDatas.labels,

    datasets: this.pieChartDatas.datasets
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Device Usage',
      },
    },
  };

  public pieChartType: ChartType = 'pie';

  // Doughnut Chart
  public doughnutChartData: ChartConfiguration['data'] = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [300, 150, 100, 200, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // public doughnutChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Product Distribution',
  //     },
  //   },
  // };

  public doughnutChartType: ChartType = 'doughnut';
}