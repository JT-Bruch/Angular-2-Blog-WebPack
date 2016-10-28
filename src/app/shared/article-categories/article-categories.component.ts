import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogCategory } from '../../core/interfaces/blog-category';


@Component({

  selector: 'app-article-categories',
  templateUrl: 'article-categories.component.html',
  styleUrls: ['article-categories.component.scss']
})
export class ArticleCategoriesComponent implements OnInit {

  @Input() blogCategoryList: BlogCategory[] = [];
  @Output() onCategoryClicked = new EventEmitter<BlogCategory>();

  constructor() { }

  ngOnInit() {
  }

  getNumBlogs(category: BlogCategory): number {
    return Object.keys(category.blogs).length;
  }

  categoryClicked(category: BlogCategory): void {
    this.onCategoryClicked.emit(category);
  }
}
