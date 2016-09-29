import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../core/interfaces/blog-post';

@Component({

  selector: 'app-blog-preview',
  templateUrl: 'blog-preview.component.html',
  styleUrls: ['blog-preview.component.sass']
})
export class BlogPreviewComponent implements OnInit {

  @Input() blog: BlogPost;
  constructor() { }

  ngOnInit() {
  }

}
