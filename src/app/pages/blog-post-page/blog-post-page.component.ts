import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BlogService } from '../../core/database/blog.service';
import { BlogPost } from '../../core/interfaces/blog-post';

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss']
})
export class BlogPostPageComponent implements OnInit {

  post: BlogPost;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //
    this.route.params.forEach((params: Params) => {
     let id = params['id'];
     this.blogService.getBlogById(id).then(post => this.post = post);
   });
  }

}
