import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SharedModule } from './../../shared/shared.module';

import { BlogPostPageComponent } from './blog-post-page.component';

import { blogPostPageRouting as BlogPostPageRouting } from './blog-post-page.routing';

@NgModule({
  declarations: [
                  BlogPostPageComponent
  ],
  exports: [
            BlogPostPageComponent,
            CommonModule,
            FormsModule
  ],
  imports: [
            CommonModule,
            SharedModule,
            BlogPostPageRouting,
            TranslateModule
  ]
})
export class BlogPostPageModule { }
