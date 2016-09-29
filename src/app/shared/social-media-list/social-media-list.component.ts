import { Component, OnInit, Input } from '@angular/core';
import { GlobalLinkService } from '../../core/database/global-link.service';

@Component({

  selector: 'app-social-media-list',
  templateUrl: 'social-media-list.component.html',
  styleUrls: ['social-media-list.component.sass'],
  providers: [GlobalLinkService]
})
export class SocialMediaListComponent implements OnInit {
  @Input() styleToUse: string;
  facebookLink: string = this.linkService.facebookLink;
  twitterLink: string = this.linkService.twitterLink;
  linkedInLink: string = this.linkService.linkedInLink;
  githubLink: string = this.linkService.githubLink;

  constructor(private linkService: GlobalLinkService) { }

  ngOnInit() {
  }

}
