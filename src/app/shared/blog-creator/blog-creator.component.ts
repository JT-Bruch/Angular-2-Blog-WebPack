import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({

  selector: 'app-blog-creator',
  templateUrl: 'blog-creator.component.html',
  styleUrls: ['blog-creator.component.scss']
})
export class BlogCreatorComponent implements OnInit {

  @Output() tagAdded = new EventEmitter<string>();
  @Input() blogCreatorCompleteTagList: string[];

  storyHtml: string;
  options = {
    placeholder: '+ term',
    secondaryPlaceholder: 'Enter a new term',
  };


  constructor() {
    this.storyHtml = `<p>My new story.</p>`;
   }

  ngOnInit() {
  }

  onTagAdded(val: string) {
    console.log(`blog-creator: ${val}`);
    this.tagAdded.emit(val);
  }

  testEmit(val: string) {
    this.tagAdded.emit(val);
  }

  keyupOnEditor(storyContent: string) {
    this.storyHtml = storyContent;
  }


}
