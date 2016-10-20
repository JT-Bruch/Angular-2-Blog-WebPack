import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../core/interfaces/blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() blog: BlogPost;

  constructor() { }

  ngOnInit() {
    console.log(this.blog);
  }




}
