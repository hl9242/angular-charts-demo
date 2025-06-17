
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WfSharedModule } from '@wf/angular-core';
import { WfPageTitleModule } from '@wf/angular-core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { BaseChartDirective } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';

import { V2vDashboardComponent } from './v2v-dashboard.component';
import { V2vDashboardPopupComponent } from '../v2v-dashboard/v2v-dashboard-popup/v2v-dashboard-popup.component';

const routes: Routes = [
  {
    path: '**',
    component: V2vDashboardComponent,
    data: {
        title: 'BEAMS V2V Dashboard'
    }
  }
];


@NgModule({
  declarations: [
    V2vDashboardComponent, 
    V2vDashboardPopupComponent
  ],
  imports: [
    WfSharedModule,
    WfPageTitleModule,
    RouterModule.forChild(routes),
    SharedModule,
    BaseChartDirective,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    OverlayModule
  ],
  providers: [provideNativeDateAdapter()],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class V2vDashboardModule { }