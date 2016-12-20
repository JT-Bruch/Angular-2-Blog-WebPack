import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';
import { CreateArticlePageComponent } from './create-article-page.component';
import { createArticlePageRouting as CreateArticlePageRouting } from './create-article-page.routing';

@NgModule({
  declarations: [
                  CreateArticlePageComponent
  ],
  exports: [
            CreateArticlePageComponent,
            CommonModule,
            FormsModule
  ],
  imports: [
            CommonModule,
            SharedModule,
            CreateArticlePageRouting,
            TranslateModule
  ]
})
export class CreateArticlePageModule { }
