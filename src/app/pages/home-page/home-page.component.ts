import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { BlogService } from '../../core/database/blog.service';
import { BlogPost } from '../../core/interfaces/blog-post';

@Component({
  selector: 'app-home-page',
  styleUrls:['./home-page.component.scss'],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  blogList: Observable<BlogPost[]>;

  constructor(private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.blogList = this.blogService.blogs$;
  }

  openBlogPage(blogKey: string) {
    this.router.navigate(['/blogpost', blogKey]);
  }

}
