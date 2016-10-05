import { Component, OnInit, Input, OnChanges } from '@angular/core';


import { SocialMediaLinks } from '../../core/interfaces/social-media-links';

@Component({

  selector: 'app-social-media-list',
  templateUrl: 'social-media-list.component.html',
  styleUrls: ['social-media-list.component.scss']
})
export class SocialMediaListComponent implements OnInit, OnChanges {
  @Input() styleToUse: string;
  @Input() socialMediaInput: SocialMediaLinks;


  internalModel: SocialMediaLinks = new SocialMediaLinks();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any): void {
    let mediaChange: SocialMediaLinks = changes.socialMediaInput.currentValue;
    if (mediaChange) {
      this.internalModel = new SocialMediaLinks(mediaChange.facebook,
        mediaChange.twitter,
        mediaChange.linkedin,
        mediaChange.github);
    }
  }
}
