import { Component, OnInit } from '@angular/core';
import { InstagramItem, InstagramListService } from '../../core/social/instagram-list.service';

@Component({

  selector: 'app-instagram-preview',
  templateUrl: 'instagram-preview.component.html',
  styleUrls: ['instagram-preview.component.sass']
})
export class InstagramPreviewComponent implements OnInit {

  instagramList: InstagramItem[];
  constructor(private instagramService: InstagramListService) { }

  ngOnInit() {
    this.instagramList = this.instagramService.buildFakeInstagramList();
  }

}
