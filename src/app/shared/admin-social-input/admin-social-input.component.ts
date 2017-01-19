import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { SocialMediaLinks } from './../../core/interfaces/social-media-links';

@Component({
  selector: 'app-admin-social-input',
  styleUrls: ['./admin-social-input.component.scss'],
  templateUrl: './admin-social-input.component.html'
})
export class AdminSocialInputComponent implements OnInit, OnChanges {

  @Input() socialMediaInput: SocialMediaLinks;
  @Output() onChange = new EventEmitter<SocialMediaLinks>();

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

  onSave(): void {
    this.onChange.emit(this.internalModel);
  }

}
