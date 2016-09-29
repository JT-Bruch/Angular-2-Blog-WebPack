import { Component, OnInit } from '@angular/core';


import { ConstService } from '../../core/utility/const.service';


import { BlogCategory } from '../../core/interfaces/blog-category';
import { BlogCategoryService } from '../../core/database/blog-category.service';




@Component({

  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  categoryList: BlogCategory[] = [];

  constructor(public blogCategoryService: BlogCategoryService,
             private constService: ConstService) { }

  ngOnInit() {
    this.loadCategoryList();
  }


  loadCategoryList(): void {
    this.blogCategoryService.getCategoriesByName(this.constService.maxCatToShow).then(val => {
       val.forEach(element => {
         this.categoryList.push(element);
       });
    });
  }




}
