import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ChartPopupComponent } from './chartPop-up/chart-popup.component';
import { jsonData } from '../app/jsonData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BaseChartDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pieChartDatas: ChartData<'pie', number[], string | string[]> = {
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
    const cioCounts: { [key: string]: number } = {};

    // Loop through JSON data
    jsonData.p2pStatusResponseList.forEach((item) => {
      const cio = item.cio || 'Unknown';
      cioCounts[cio] = (cioCounts[cio] || 0) + 1;
    });

    // Assign to chart properties
    const labels = Object.keys(cioCounts);
    const data = Object.values(cioCounts);

      this.pieChartDatas = {
        labels: labels,
        datasets: [
          {
            data: data,
            label: 'CIO Count',
          },
        ],
      };
  }
  title = 'Angular Charts Demo';

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
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        data: [542, 1200, 786, 1500],
        label: 'Revenue',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        data: [300, 700, 450, 900],
        label: 'Expenses',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
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
        text: 'CIO charts',
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

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Distribution',
      },
    },
  };

  public doughnutChartType: ChartType = 'doughnut';
}
