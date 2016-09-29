import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';


import { MorePageComponent }  from './more-page.component';

import { morePageRouting as MorePageRouting }  from './more-page.routing';



@NgModule({
  imports: [
            CommonModule,
            SharedModule,
            MorePageRouting,
            TranslateModule
  ],
  declarations: [
                  MorePageComponent
  ],
  exports: [
            MorePageComponent,
            CommonModule,
            FormsModule
  ]
})
export class MorePageModule { }
