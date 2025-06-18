import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  // imports: [CommonModule, FormsModule],
  selector: "app-psp-dashboard-popup",
  templateUrl: "./psp-dashboard-popup.component.html",
  styleUrl: "./psp-dashboard-popup.component.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PspDashboardPopupComponent implements OnInit {
  displayedColumns: string[] = [
    "cio",
    "targetDate",
    "targetPlatform",
    "primaryAppId",
    "primaryAppName",
    "sourceHostName",
    "sourceModelName",
    "sourceDatacenter",
    "targetHostName",
    "targetEnvironment",
    "targetDatacenter",
    "targetCluster",
    "targetRack",
    "migrationGroup",
  ];

  tableColumns: any[] = [
    { field: "cio" },
    { field: "targetDate", headerName: "Source Data Center" },
    { field: "targetPlatform", headerName: "Target Data Center" },
    { field: "primaryAppId" },
    { field: "primaryAppName" },
    { field: "sourceHostName" },
    { field: "sourceModelName" },
    { field: "sourceDatacenter" },
    { field: "targetHostName" },
    { field: "targetEnvironment" },
    { field: "targetDatacenter" },
    { field: "targetCluster" },
    { field: "targetRack" },
    { field: "migrationGroup" }
  ];

  defaultTableColumns = {
    filter: "cio",
  };
  constructor(
    public dialogRef: MatDialogRef<PspDashboardPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { header: any; dataSource: any; filter: any }
  ) {}

  ngOnInit() {
    if (this.data.dataSource) {
      this.data.dataSource = this.data.dataSource.filter(
        (item) => item[this.data.filter.name] === this.data.filter.value
      );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}