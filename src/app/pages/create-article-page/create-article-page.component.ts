import { Component, OnInit } from '@angular/core';


import { BlogService } from '../../core/database/blog.service';
import { BlogCategoryService } from '../../core/database/blog-category.service';

import { BlogCategory } from '../../core/interfaces/blog-category';

import { RandomService } from '../../core/utility/random.service';

@Component({
  selector: 'app-create-article-page',
  templateUrl: './create-article-page.component.html',
  styleUrls: ['./create-article-page.component.scss']
})
export class CreateArticlePageComponent implements OnInit {

  existingBlogCategories: BlogCategory[];
  autoCompleteTagList: string[] = [];

  constructor(public blogService: BlogService,
              public blogCategoryService: BlogCategoryService,
              private randomService: RandomService) { }



  ngOnInit() {
    this.loadAutoCompleteTagList();
  }

  loadAutoCompleteTagList(): void {
    this.blogCategoryService.getCategoriesByName().then(val => {
       val.forEach(element => {
         this.autoCompleteTagList.push(element.name);
       });
    });
  }

  getStoryHtml(html: string): void {
    let testPost = this.blogService.createFakeBlogPost();
    testPost.description += this.randomService.getRandomParagraph();
    testPost.description += this.randomService.getRandomParagraph();
    testPost.description += this.randomService.getRandomParagraph();
    testPost.description += this.randomService.getRandomParagraph();

    this.blogService.createBlog(this.blogService.createFakeBlogPost());
  }

  tagAdded(val: string): void {
    if (this.autoCompleteTagList.indexOf(val)) {
      this.blogCategoryService.addBlogCategory(val);
    }
  }

}
