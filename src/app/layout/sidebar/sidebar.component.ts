import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ConstService } from '../../core/utility/const.service';
import { BlogCategory } from '../../core/interfaces/blog-category';
import { BlogCategoryService } from '../../core/database/blog-category.service';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  categoryList: Observable<BlogCategory[]>;

  constructor(public blogCategoryService: BlogCategoryService,
             private constService: ConstService) { }

  ngOnInit() {
    this.categoryList = this.blogCategoryService.categories$;
  }

  filterCategories($event: BlogCategory) {
    console.log($event);
  }
}
