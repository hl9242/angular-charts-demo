import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-v2v-dashboard-popup',
  templateUrl: './v2v-dashboard-popup.component.html',
  styleUrl: './v2v-dashboard-popup.component.scss'
})
export class V2vDashboardPopupComponent implements OnInit{
  displayedColumns: string[] = ["sourceEnvDescription", "sourceDatacenter", "targetDatacenter", "sourceCluster", "targetCluster", "migrationStatus"];
  
  tableColumns: any[] = [
    { field: 'sourceEnvDescription'},
    { field: 'sourceDatacenter', headerName: 'Source Data Center'},
    { field: 'targetDatacenter', headerName: 'Target Data Center'},
    { field: 'migrationStatus'},
    { field: 'targetCluster'},
    { field: 'sourceCluster'}
  ];

  defaultTableColumns = {
    filter: "sourceEnvDescription",
  }
  constructor(
    public dialogRef: MatDialogRef<V2vDashboardPopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {header: any, dataSource: any, filter: any}){}

  ngOnInit(){
    if(this.data.dataSource){
      this.data.dataSource = this.data.dataSource.filter(item => item[this.data.filter.name] === this.data.filter.value)
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}