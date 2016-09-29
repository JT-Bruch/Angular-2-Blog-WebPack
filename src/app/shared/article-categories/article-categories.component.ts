import { Component, OnInit, Input } from '@angular/core';
import { BlogCategory } from '../../core/interfaces/blog-category';


@Component({

  selector: 'app-article-categories',
  templateUrl: 'article-categories.component.html',
  styleUrls: ['article-categories.component.sass']
})
export class ArticleCategoriesComponent implements OnInit {

  @Input() blogCategoryList: BlogCategory[] = [];

  constructor() { }

  ngOnInit() {
  }

}
