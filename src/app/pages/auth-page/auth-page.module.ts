import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';


import { AuthPageComponent }  from './auth-page.component';

import { authPageRouting as AuthPageRouting }  from './auth-page.routing';



@NgModule({
  imports: [
            CommonModule,
            SharedModule,
            AuthPageRouting,
            TranslateModule
  ],
  declarations: [
                  AuthPageComponent
  ],
  exports: [
            AuthPageComponent,
            CommonModule,
            FormsModule
  ]
})
export class AuthPageModule { }
