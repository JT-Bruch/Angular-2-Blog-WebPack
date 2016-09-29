import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';


import { AboutPageComponent }  from './about-page.component';

import { aboutPageRouting as AboutPageRouting }  from './about-page.routing';



@NgModule({
  imports: [
            CommonModule,
            SharedModule,
            AboutPageRouting,
            TranslateModule
  ],
  declarations: [
                  AboutPageComponent
  ],
  exports: [
            AboutPageComponent,
            CommonModule,
            FormsModule
  ]
})
export class AboutPageModule { }
