import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WfSharedModule } from '@wf/angular-core';
import { WfPageTitleModule } from '@wf/angular-core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { BaseChartDirective } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';

import { PspDashboardPopupComponent } from './psp-dashboard-popup/psp-dashboard-popup.component';
import { PspDashboardComponent } from './psp-dashboard.component';

const routes: Routes = [
  {
    path: '**',
    component: PspDashboardComponent,
    data: {
        title: 'P2P Dashboard'
    }
  }
];


@NgModule({
  declarations: [PspDashboardComponent],
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
export class PspdashboardModule { }
