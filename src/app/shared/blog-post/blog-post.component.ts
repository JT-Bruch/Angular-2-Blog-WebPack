import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../core/interfaces/blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() blog: BlogPost;

  constructor() {
    this.blog = {
      $key: '',
      imageUrl: '',
      author: '',
      modDate: new Date().toDateString(),
      createDate: new Date().toDateString(),
      displayOrder: 0,
      viewCount: 0,
      title: '',
      description: '',
      likeCount: 0,
      commentCount: 0,
      articleContent: '',
      linkUrl: '',
      modDateObj: new Date(),
      createDateObj: new Date(),
      categories: {}
    };
   }

  ngOnInit() {
    console.log(this.blog);
  }




}
