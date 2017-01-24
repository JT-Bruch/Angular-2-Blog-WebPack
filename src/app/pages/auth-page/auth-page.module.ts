import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';

import { AuthPageComponent } from './auth-page.component';

import { AuthPageRoutingModule } from './auth-page.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
                  AuthPageComponent,
                  LoginComponent,
                  SignupComponent
  ],
  exports: [
            AuthPageComponent,
            CommonModule,
            FormsModule
  ],
  imports: [
            CommonModule,
            SharedModule,
            AuthPageRoutingModule,
            TranslateModule,
            FlexLayoutModule,
            MaterialModule
  ]
})
export class AuthPageModule { }
