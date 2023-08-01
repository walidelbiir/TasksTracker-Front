import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { GrantPrivilegesComponent } from './grant-privileges/grant-privileges.component';


@NgModule({
  declarations: [
    DeleteComponent,
    ListComponent,
    GrantPrivilegesComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
