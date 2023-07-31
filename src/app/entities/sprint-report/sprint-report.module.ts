import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintReportRoutingModule } from './route/sprint-report-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DeleteComponent,
    ListComponent,
    UpdateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SprintReportRoutingModule
  ]
})
export class SprintReportModule { }
