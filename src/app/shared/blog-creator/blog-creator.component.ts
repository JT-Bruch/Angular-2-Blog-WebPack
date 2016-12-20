import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface BlogArticle {
  html: string;
  title: string;
  description: string;
  author: string;
}

@Component({

  selector: 'app-blog-creator',
  styleUrls:['./blog-creator.component.scss'],
  templateUrl: './blog-creator.component.html'
})
export class BlogCreatorComponent implements OnInit {

  @Output() tagAdded = new EventEmitter<string>();
  @Output() articleSubmitted = new EventEmitter<BlogArticle>();
  @Input() blogCreatorCompleteTagList: string[];
  @Input() authorInput: string;
  @Input() enablePreview: boolean = false;

  story: BlogArticle = {
    author: this.authorInput,
    description: '',
    html: '',
    title: '',
  };

  options = {
    placeholder: '+ tag',
    secondaryPlaceholder: 'Enter a new tag',
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
