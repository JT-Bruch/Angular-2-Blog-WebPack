import { Component, OnInit, Input } from '@angular/core';
import { GlobalLinkService } from '../../core/database/global-link.service';
import { SocialMediaLinks } from '../../core/interfaces/social-media-links';

@Component({

  selector: 'app-social-media-list',
  templateUrl: 'social-media-list.component.html',
  styleUrls: ['social-media-list.component.scss'],
  providers: [GlobalLinkService]
})
export class SocialMediaListComponent implements OnInit {
  @Input() styleToUse: string;

  socialMedia: SocialMediaLinks = new SocialMediaLinks();

  constructor(private linkService: GlobalLinkService) {

  }

  ngOnInit() {
    this.linkService.getSocialMedia().then(sm => this.socialMedia = sm);
  }

}
