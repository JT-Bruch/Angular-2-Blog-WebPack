import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogPost, EditBlogPost } from '../../core/interfaces/blog-post';

@Component({
  selector: 'app-blog-post',
  styleUrls:['././blog-post.component.scss'],
  templateUrl: '././blog-post.component.html',

})
export class BlogPostComponent implements OnInit {

  @Input() blog: BlogPost;
  @Output() onBlogEdited = new EventEmitter<EditBlogPost>();
  canEditContent = false;

  constructor() {
    this.blog = {
      $key: '',
      articleContent: '',
      author: '',
      categories: {},
      commentCount: 0,
      createDate: new Date().toDateString(),
      createDateObj: new Date(),
      description: '',
      displayOrder: 0,
      imageUrl: '',
      likeCount: 0,
      linkUrl: '',
      modDate: new Date().toDateString(),
      modDateObj: new Date(),
      title: '',
      viewCount: 0,
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
      articleContent: this.blog.articleContent,
      title: this.blog.title
    };
    this.onBlogEdited.emit(editedPost);
  }

}
