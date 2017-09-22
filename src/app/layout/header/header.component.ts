import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../../core/auth/auth.service';
import { GlobalLinkService } from './../../core/database/global-link.service';
import { SocialMediaLinks } from './../../core/interfaces/social-media-links';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  isCollapsed: boolean = true;
  socialMediaStyle: string = 'header-style';

  socialMedia: Observable<SocialMediaLinks>;

  constructor(public authService: AuthService,
              private linkService: GlobalLinkService) { }

  ngOnInit() {
    this.socialMedia = this.linkService.socialMedia$;
  }

  public collapsed(event: any): void {
  }

  public expanded(event: any): void {
  }

}
