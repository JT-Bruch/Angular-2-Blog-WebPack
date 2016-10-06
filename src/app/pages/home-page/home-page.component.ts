import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { BlogService } from '../../core/database/blog.service';
import { BlogPost } from '../../core/interfaces/blog-post';

@Component({

  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  blogList: Observable<BlogPost[]>;

  constructor(public blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.blogList = this.blogService.blogs$;
  }

  openBlogPage(blogKey: string) {
    console.log(blogKey);
    this.router.navigate(['/blogpost', blogKey]);
  }

}
