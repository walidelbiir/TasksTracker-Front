import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterComponent } from './register/register.component';
import { UpdateSettingsComponent } from './update-settings/update-settings.component';


@NgModule({
  declarations: [
    PasswordResetComponent,
    RegisterComponent,
    UpdateSettingsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
