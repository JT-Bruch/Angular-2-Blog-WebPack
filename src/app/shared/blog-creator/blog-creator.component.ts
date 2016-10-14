import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface BlogArticle {
  html: string;
  title: string;
  description: string;
  author: string;
}

@Component({

  selector: 'app-blog-creator',
  templateUrl: 'blog-creator.component.html',
  styleUrls: ['blog-creator.component.scss']
})
export class BlogCreatorComponent implements OnInit {

  @Output() tagAdded = new EventEmitter<string>();
  @Output() articleSubmitted = new EventEmitter<BlogArticle>();
  @Input() blogCreatorCompleteTagList: string[];
  @Input() enablePreview: boolean = false;

  story: BlogArticle = {
    title: '',
    html: '',
    description: '',
    author: ''
  };

  options = {
    placeholder: '+ term',
    secondaryPlaceholder: 'Enter a new term',
  };


  constructor() {

   }

  ngOnInit() {
  }

  onTagAdded(val: string) {
    this.tagAdded.emit(val);
  }


  addArticle() {
    this.articleSubmitted.emit(this.story);
  }

  keyupOnEditor(storyContent: string) {
    this.story.html = storyContent;
  }


}
