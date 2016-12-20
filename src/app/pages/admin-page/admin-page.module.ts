import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';

import { AdminPageComponent } from './admin-page.component';

import { adminPageRouting as AdminPageRouting } from './admin-page.routing';

@NgModule({
  declarations: [
                  AdminPageComponent
  ],
  exports: [
            AdminPageComponent,
            CommonModule,
            FormsModule
  ],
  imports: [
            CommonModule,
            SharedModule,
            AdminPageRouting,
            TranslateModule
  ]
})
export class AdminPageModule { }
