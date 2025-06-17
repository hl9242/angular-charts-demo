import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { V2vDashboardService } from './services/v2v-dashboard.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartOptions, ChartData } from 'chart.js';
import { V2vDashboardPopupComponent } from './v2v-dashboard-popup/v2v-dashboard-popup.component';
import { DataSource } from '@angular/cdk/collections';

export interface TableData {
  appId: string,
  cio: string,
  sourceDatacenter: string,
  targetDatacenter: string,
  total: number,
  data: TableData[],
  sourceEnvDescription: string,
  migrationStatus: string,
  sourceCluster: string,
  targetCluster: string,
}

export interface LeadershipTableData {
  appId: string,
  cio: string,
  sourceDatacenter: string,
  targetDatacenter: string,
  total: number,
  level: number,
  expandable: boolean,
  sourceEnvDescription: string,
  migrationStatus: string,
  sourceCluster: string,
  targetCluster: string,
}

@Component({
  selector: 'app-v2v-dashboard',
  templateUrl: './v2v-dashboard.component.html',
  styleUrl: './v2v-dashboard.component.scss'
})
export class V2vDashboardComponent {
  isLoading: boolean = false;
  openFilter: boolean = false;
  filterList: any = [];
  filters: {
    appId: string,
    appName: string,
    cio: string[],
    status: string,
    startDate: string,
    endDate: string,
    filterBy: string,
  } = {
      appId: "",
      appName: "",
      cio: [],
      startDate: "",
      endDate: "",
      status: "",
      filterBy: "migrationStatus",
    };

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

  displayedColumns: string[] = ["expand", "sourceEnvDescription", "sourceDatacenter", "targetDatacenter", "sourceCluster", "targetCluster", "migrationStatus", "total"];
  // tableCols: any[] = [
  //   { colDef: "sourceEnvDescription", label: "Environment" },
  //   { colDef: "sourceDatacenter", label: "Source Data Center" },
  //   { colDef: "targetDatacenter", label: "Target Data Center" },
  //   { colDef: "migrationStatus", label: "Migration Status" },
  //   { colDef: "targetCluster", label: "Target Cluster" },
  //   { colDef: "sourceCluster", label: "Source Cluster" },
  //   { colDef: "total", label: "Total" },
  // ];

  tableDataSource: any[] = [];
  graphData: any[] = [];
  // verticalTotal: any;
  barChartData: ChartData<'bar'>;
  barChartHostDistributionData: ChartData<'bar'>;
  // treeControl: FlatTreeControl<LeadershipTableData>;
  // treeFlattener: MatTreeFlattener<TableData, LeadershipTableData>;
  // dataSource: MatTreeFlatDataSource<TableData, LeadershipTableData>;

  constructor(private v2vDashboardService: V2vDashboardService, private router: Router, private dialog: MatDialog){
    // this.treeFlattener = new MatTreeFlattener(
    //   this.transformer,
    //   this.getlevel,
    //   this.isExpandable,
    //   this.getChildern
    // );
    // this.treeControl = new FlatTreeControl<LeadershipTableData>(
    //   this.getlevel,
    //   this.isExpandable
    // );
    // this.dataSource = new MatTreeFlatDataSource(
    //   this.treeControl,
    //   this.treeFlattener
    // );
    // this.dataSource.data = this.tableDataSource;
  }

  // transformer = (node: TableData, level: number): LeadershipTableData => {
  //   return {
  //     appId: node.appId,
  //     // appId: (level === 0 ? node.appId : (level === 1 ? "\t" + node.appId : "\t\t" + node.appId)),
  //     cio: (level === 0 ? node.cio : node.appId),
  //     // cio: (level === 0 ? node.cio : (level === 1 ? "\t" + node.appId : "\t\t" + node.appId)),
  //     sourceDatacenter: node.sourceDatacenter,
  //     targetDatacenter: node.targetDatacenter,
  //     sourceEnvDescription: node.sourceEnvDescription,
  //     migrationStatus: node.migrationStatus,
  //     targetCluster: node.targetCluster,
  //     sourceCluster: node.sourceCluster,
  //     total: (level === 0 ? node.total : 0),
  //     level,
  //     expandable: !!node.data && node.data.length > 0
  //   }
  // }

  // getlevel = (node: LeadershipTableData) => node.level;
  // isExpandable = (node: LeadershipTableData) => node.expandable;
  // getChildern = (node: TableData): TableData[] | undefined => node.data;
  // toggleNode(node: LeadershipTableData): void {
  //   this.treeControl.toggle(node);
  // }

  ngOnInit(){
    let req = {
        "neighborhood":[],
        "appId":[],
        "cio":[],
        "sourceCluster":[],
        "sourceVCenter":[],
        "sourceVMName":[],
        "sourceDatacenter":[],
        "targetCluster":[],
        "targetVCenter":[],
        "targetVMName":[],
        "targetDatacenter":[]
      };
    this.getTableData(req);
  }

  getTableData(req: any) {
    this.isLoading = true;
    // this.tableDataSource = this.v2vDashboardService.getV2vDashboardData(req, this.filters);
    this.v2vDashboardService.getV2vDashboardData(req, this.filters).subscribe({
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
    const dialogRef = this.dialog.open(V2vDashboardPopupComponent, {
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
  
}