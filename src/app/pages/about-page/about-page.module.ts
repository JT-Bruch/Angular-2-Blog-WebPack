import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';

import { AboutPageComponent } from './about-page.component';
import { AboutPageRoutingModule } from './about-page.routing';

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutPageRoutingModule,
    TranslateModule
  ]
})
export class AboutPageModule { }
