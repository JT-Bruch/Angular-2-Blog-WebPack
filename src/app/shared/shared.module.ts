import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HighlightDirective }  from './highlight.directive';
import { HtmlEditorDirective }  from './html-editor/html-editor.directive';

import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TagInputModule } from 'ng2-tag-input';

import { SocialMediaListComponent }  from './social-media-list/social-media-list.component';
import { BlogCreatorComponent }  from './blog-creator/blog-creator.component';
import { BlogTaggerComponent }  from './blog-tagger/blog-tagger.component';
import { BlogPreviewComponent }  from './blog-preview/blog-preview.component';
import { InstagramPreviewComponent }  from './instagram-preview/instagram-preview.component';
import { FacebookPreviewComponent }  from './facebook-preview/facebook-preview.component';
import { AdPreviewComponent }  from './ad-preview/ad-preview.component';
import { ArticleCategoriesComponent }  from './article-categories/article-categories.component';
import { RecentArticlesComponent }  from './recent-articles/recent-articles.component';
import { RecommendedArticlesComponent }  from './recommended-articles/recommended-articles.component';
import { SearchSiteComponent }  from './search-site/search-site.component';


@NgModule({
  imports: [
            CommonModule,
            TranslateModule,
            FormsModule,
            TagInputModule
  ],
  declarations: [
                  HighlightDirective,
                  SocialMediaListComponent,
                  BlogCreatorComponent,
                  BlogTaggerComponent,
                  BlogPreviewComponent,
                  InstagramPreviewComponent,
                  FacebookPreviewComponent,
                  AdPreviewComponent,
                  ArticleCategoriesComponent,
                  RecentArticlesComponent,
                  RecommendedArticlesComponent,
                  SearchSiteComponent,
                  HtmlEditorDirective

  ],
  exports: [
            HighlightDirective,
            SocialMediaListComponent,
            BlogCreatorComponent,
            BlogTaggerComponent,
            BlogPreviewComponent,
            InstagramPreviewComponent,
            FacebookPreviewComponent,
            AdPreviewComponent,
            ArticleCategoriesComponent,
            RecentArticlesComponent,
            RecommendedArticlesComponent,
            SearchSiteComponent,
            HtmlEditorDirective,
            CommonModule,
            FormsModule
  ]
})
export class SharedModule { }