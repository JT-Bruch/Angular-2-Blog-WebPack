import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-tagger',
  templateUrl: './blog-tagger.component.html',
  styleUrls: ['./blog-tagger.component.sass']
})
export class BlogTaggerComponent implements OnInit {

  @Input('taggerAutoCompleteList') taggerAutoCompleteList: string[];
  @Output() onTagAdded = new EventEmitter<string>();

  options = {
        placeholder: '+ term',
        secondaryPlaceholder: 'Enter a new term'
  };
  constructor() { }

  ngOnInit() {
  }

  onItemAdded(item) {
      console.log(`${item} has been added`);
      this.onTagAdded.emit(item);
  }
  onItemRemoved(item) {
      console.log(`${item} has been removed :(`);
  }


}
