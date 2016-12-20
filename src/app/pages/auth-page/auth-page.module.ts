import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';

import { AuthPageComponent } from './auth-page.component';

import { authPageRouting as AuthPageRouting } from './auth-page.routing';

@NgModule({
  declarations: [
                  AuthPageComponent
  ],
  exports: [
            AuthPageComponent,
            CommonModule,
            FormsModule
  ],
  imports: [
            CommonModule,
            SharedModule,
            AuthPageRouting,
            TranslateModule
  ]
})
export class AuthPageModule { }
