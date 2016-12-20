import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-tagger',
  styleUrls:['././blog-tagger.component.scss'],
  templateUrl: '././blog-tagger.component.html'
})
export class BlogTaggerComponent implements OnInit {

  @Input('taggerAutoCompleteList') taggerAutoCompleteList: string[];
  @Output() onTagAdded = new EventEmitter<string>();
  @Output() onTagRemoved = new EventEmitter<string>();

  options = {
        placeholder: '+ tag',
        secondaryPlaceholder: 'Enter a new tag'
  };
  constructor() { }

  ngOnInit() {
  }

  tagAdded(item) {
      this.onTagAdded.emit(item);
  }
  tagRemoved(item) {
      console.log(`${item} has been removed :(`);
  }

}
