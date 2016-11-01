import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogPost, EditBlogPost } from '../../core/interfaces/blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() blog: BlogPost;
  @Output() onBlogEdited = new EventEmitter<EditBlogPost>();
  canEditContent = false;

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
  }

  enableEditContent() {
    this.canEditContent = !this.canEditContent;
  }

  onSaveEditedContent() {
    const editedPost: EditBlogPost = {
      $key: this.blog.$key,
      title: this.blog.title,
      articleContent: this.blog.articleContent
    };
    this.onBlogEdited.emit(editedPost);
  }

}
