import { Component, OnInit } from '@angular/core';

import { GlobalLinkService } from '../../core/database/global-link.service';



@Component({

  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.sass'],
  providers: [],
})

export class HeaderComponent implements OnInit {

  facebookLink: string = this.linkService.facebookLink;
  twitterLink: string = this.linkService.twitterLink;
  linkedInLink: string = this.linkService.linkedInLink;
  githubLink: string = this.linkService.githubLink;
  isCollapsed: boolean = true;
  socialMediaStyle: string = 'header-style';

  constructor(private linkService: GlobalLinkService) { }

  ngOnInit() {
  }



  public collapsed(event: any): void {
  }

  public expanded(event: any): void {
  }

}
