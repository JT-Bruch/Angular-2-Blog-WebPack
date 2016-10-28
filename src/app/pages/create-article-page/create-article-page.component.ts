import { FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { BlogCategory } from '../../core/interfaces/blog-category';
import { BlogPost } from '../../core/interfaces/blog-post';

import { BlogService } from '../../core/database/blog.service';
import { BlogCategoryService } from '../../core/database/blog-category.service';
import { RandomService } from '../../core/utility/random.service';

import { BlogArticle } from '../../shared/blog-creator/blog-creator.component';

@Component({
  selector: 'app-create-article-page',
  templateUrl: './create-article-page.component.html',
  styleUrls: ['./create-article-page.component.scss']
})
export class CreateArticlePageComponent implements OnInit {

  existingBlogCategories: FirebaseListObservable<BlogCategory[]>;
  autoCompleteTagList: string[] = [];

  constructor(public blogService: BlogService,
              public blogCategoryService: BlogCategoryService,
              private randomService: RandomService) { }

  ngOnInit() {
    this.loadAutoCompleteTagList();
  }

  loadAutoCompleteTagList(): void {
    this.blogCategoryService.getCategorySnapshot().subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.autoCompleteTagList.push(snapshot.val().name);
      });
    });
  }

  addStory(article: BlogArticle): void {

    let testPost: BlogPost = this.blogService.createFakeBlogPost();
    testPost.title = article.title;
    testPost.author = article.author;
    testPost.description = article.description;
    testPost.articleContent = article.html;

    this.blogService.createBlog(testPost);
  }

  tagAdded(val: string): void {
    if (this.autoCompleteTagList.indexOf(val)) {
      this.blogCategoryService.addBlogCategory(val);
    }
  }

}
