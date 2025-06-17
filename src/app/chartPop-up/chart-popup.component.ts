import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-popup',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <table
        mat-table
        [dataSource]="data.items"
        class="mat-elevation-z8"
        style="width: 100%;"
      >
        <ng-container matColumnDef="key">
          <th mat-header-cell *matHeaderCellDef>Key</th>
          <td mat-cell *matCellDef="let element">{{ element.key }}</td>
        </ng-container>

        <ng-container matColumnDef="value">
          <th mat-header-cell *matHeaderCellDef>Value</th>
          <td mat-cell *matCellDef="let element">{{ element.value }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="['key', 'value']"></tr>
        <tr mat-row *matRowDef="let row; columns: ['key', 'value']"></tr>
      </table>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button class="close-btn" (click)="onClose()">✖ Close</button>
    </mat-dialog-actions>
  `,
})
export class ChartPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ChartPopupComponent>
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
