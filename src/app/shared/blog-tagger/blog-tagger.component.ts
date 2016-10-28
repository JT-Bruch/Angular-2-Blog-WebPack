import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-tagger',
  templateUrl: './blog-tagger.component.html',
  styleUrls: ['./blog-tagger.component.scss']
})
export class BlogTaggerComponent implements OnInit {

  @Input('taggerAutoCompleteList') taggerAutoCompleteList: string[];
  @Output() onTagAdded = new EventEmitter<string>();
  @Output() onTagRemoved = new EventEmitter<string>();

  options = {
        placeholder: '+ term',
        secondaryPlaceholder: 'Enter a new term'
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
