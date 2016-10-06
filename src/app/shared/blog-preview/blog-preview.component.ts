import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../../core/interfaces/blog-post';

@Component({

  selector: 'app-blog-preview',
  templateUrl: 'blog-preview.component.html',
  styleUrls: ['blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {

  @Input() blog: BlogPost;
  @Output() onBlogClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  blogPreviewClicked(item) {
    this.onBlogClicked.emit(this.blog.$key);
  }

}
