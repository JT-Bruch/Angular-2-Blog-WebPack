import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';


import { PageNotFoundComponent }  from './page-not-found.component';

import { pageNotFoundRouting as PageNotFoundRouting }  from './page-not-found.routing';



@NgModule({
  imports: [
            CommonModule,
            SharedModule,
            PageNotFoundRouting,
            TranslateModule
  ],
  declarations: [
                  PageNotFoundComponent
  ],
  exports: [
            PageNotFoundComponent,
            CommonModule,
            FormsModule
  ]
})
export class AboutPageModule { }
