import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ChartPopupComponent } from './chartPop-up/chart-popup.component';
import { jsonData } from '../app/psp-dashboard/jsonData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BaseChartDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // pieChartDatas: ChartData<'pie', number[], string | string[]> = {
  //   labels: [],
  //   datasets: [],
  // };
  // barChartDatas: ChartData<'bar', number[], string | string[]> = {
  //   labels: [],
  //   datasets: [],
  // };
  // targetChartDatas: ChartData<'doughnut', number[], string | string[]> = {
  //   labels: [],
  //   datasets: [],
  // };
  pieChartDatas: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [],
  };
  barChartDatas: ChartData<'bar', number[], string | string[]> = {
    labels: [],
    datasets: [],
  };
  targetChartDatas: ChartData<'doughnut', number[], string | string[]> = {
    labels: [],
    datasets: [],
  };

  constructor(private dialog: MatDialog) {
    // jsonData.p2pStatusResponseList.forEach((item) => {
    //   const cio = item.cio || 'Unknown';
    //   this.cioCounts[cio] = (this.cioCounts[cio] || 0) + 1;
    // });
  }
  ngOnInit(): void {
    // const cioCounts: { [key: string]: number } = {};
    // const migrationGroup: { [key: string]: number } = {};
    // const targetDate: { [key: string]: number } = {};
    // // Loop through JSON data
    // jsonData.pspStatusResponseList.forEach((item) => {
    //   const cio = item.cio || 'Unknown';
    //   const migration = item.migrationGroup || 'Unknown';
    //   const targetDates = item.targetDate || 'Unknown';
    //   //set the count
    //   cioCounts[cio] = (cioCounts[cio] || 0) + 1;
    //   migrationGroup[migration] = (migrationGroup[migration] || 0) + 1;
    //   targetDate[targetDates] = (targetDate[targetDates] || 0) + 1;
    // });

    // // Assign to chart properties
    // const labels = Object.keys(cioCounts);
    // const data = Object.values(cioCounts);

    // const barLabels = Object.keys(migrationGroup);
    // const barData = Object.values(migrationGroup);

    // const targetDateLabels = Object.keys(targetDate);
    // const targetDateData = Object.values(targetDate);

    // this.pieChartDatas = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       data: data,
    //       label: 'CIO Count',
    //     },
    //   ],
    // };
    // this.barChartDatas = {
    //   labels: targetDateLabels,
    //   datasets: [
    //     {
    //       data: targetDateData,
    //       label: 'Target Date Count',
    //     },
    //   ],
    // };
    // this.targetChartDatas = {
    //   labels: barLabels,
    //   datasets: [
    //     {
    //       data: barData,
    //       label: 'MigrationGroup Count ',
    //     },
    //   ],
    // };
    const cioCounts: { [key: string]: number } = {};
    const migrationGroup: { [key: string]: number } = {};
    const targetDate: { [key: string]: number } = {};

    jsonData.pspStatusResponseList.forEach((item) => {
      const cio = item.cio || 'Unknown';
      const migration = item.migrationGroup || 'Unknown';
      const targetDates = item.targetDate || 'Unknown';

      cioCounts[cio] = (cioCounts[cio] || 0) + 1;
      migrationGroup[migration] = (migrationGroup[migration] || 0) + 1;
      targetDate[targetDates] = (targetDate[targetDates] || 0) + 1;
    });

    this.pieChartDatas = {
      labels: Object.keys(cioCounts),
      datasets: [
        {
          data: Object.values(cioCounts),
          label: 'CIO Count',
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Optional styling
        } as ChartDataset<'pie', number[]>,
      ],
    };

    this.barChartDatas = {
      labels: Object.keys(targetDate),
      datasets: [
        {
          data: Object.values(targetDate),
          label: 'Target Date Count',
          backgroundColor: '#42A5F5',
        } as ChartDataset<'bar', number[]>,
      ],
    };

    this.targetChartDatas = {
      labels: Object.keys(migrationGroup),
      datasets: [
        {
          data: Object.values(migrationGroup),
          label: 'Migration Group Count',
          backgroundColor: ['#66BB6A', '#FFA726', '#AB47BC'],
        } as ChartDataset<'doughnut', number[]>,
      ],
    };
  }
  title = 'Angular Charts Demo';
  // 🔁 Reusable method to count values by field
  private countByField(
    fieldName: keyof (typeof jsonData.pspStatusResponseList)[0]
  ): Record<string, number> {
    const countMap: Record<string, number> = {};

    jsonData.pspStatusResponseList.forEach((item) => {
      const key = item[fieldName] || 'Unknown';
      countMap[key] = (countMap[key] || 0) + 1;
    });

    return countMap;
  }
  // 🎯 Reusable method to build ChartData
  // ✅ Strongly typed generic function
 
  // 🆕 Empty chart data template
  private createEmptyChartData(): ChartData<
    'pie' | 'bar' | 'doughnut',
    number[],
    string | string[]
  > {
    return {
      labels: [],
      datasets: [],
    };
  }
  // Line Chart
  public lineChartData: ChartConfiguration['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  public lineChartType: ChartType = 'line';

  // Bar Chart
  public barChartData: ChartConfiguration['data'] = {
    labels: this.barChartDatas.labels,

    datasets: this.barChartDatas.datasets,
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    onClick: this.onChartClick.bind(this),
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Migration charts',
      },
    },
  };

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

    datasets: this.pieChartDatas.datasets,
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
    labels: this.targetChartDatas.labels,

    datasets: this.targetChartDatas.datasets,
  };

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Target Date',
      },
    },
  };

  public doughnutChartType: ChartType = 'doughnut';
}
