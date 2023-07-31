import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    UpdateComponent,
    ListComponent,
    DetailComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
