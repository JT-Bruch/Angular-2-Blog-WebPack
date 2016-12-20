import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';

import { ForReadersPageComponent } from './for-readers-page.component';

import { forReadersPageRouting as ForReadersPageRouting } from './for-readers-page.routing';

@NgModule({
  declarations: [
                  ForReadersPageComponent
  ],
  exports: [
            ForReadersPageComponent,
            CommonModule,
            FormsModule
  ],
  imports: [
            CommonModule,
            SharedModule,
            ForReadersPageRouting,
            TranslateModule
  ]
})
export class ForReadersPageModule { }
