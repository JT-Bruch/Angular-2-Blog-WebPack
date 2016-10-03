import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../core/database/blog.service';
import { BlogCategoryService } from '../../core/database/blog-category.service';
import { RandomService } from '../../core/utility/random.service';


@Component({

  selector: 'app-about-page',
  templateUrl: 'about-page.component.html',
  styleUrls: ['about-page.component.scss']
})
export class AboutPageComponent implements OnInit {



  constructor(public blogService: BlogService,
              public blogCategoryService: BlogCategoryService,
              private randomService: RandomService) { }




  ngOnInit() {

  }


}
