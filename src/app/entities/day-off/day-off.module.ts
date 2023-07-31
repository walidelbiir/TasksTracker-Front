import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayOffRoutingModule } from './day-off-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DeleteComponent,
    UpdateComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    DayOffRoutingModule
  ]
})
export class DayOffModule { }
