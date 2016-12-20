import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../../core/auth/auth.service';
import { GlobalLinkService } from './../../core/database/global-link.service';
import { SocialMediaLinks } from './../../core/interfaces/social-media-links';

@Component({
  selector: 'app-admin-page',
  styleUrls: ['./admin-page.component.scss'],
  templateUrl: './admin-page.component.html'
})
export class AdminPageComponent implements OnInit {

  socialMedia: Observable<SocialMediaLinks>;

  constructor(private authService: AuthService,
             private linkService: GlobalLinkService) { }

  ngOnInit() {
    this.socialMedia = this.linkService.socialMedia$;
  }

  toggleAuth() {
    this.authService.isLoggedIn = !this.authService.isLoggedIn;
  }

  updateSocialMedia(updatedMedia: SocialMediaLinks) {
    this.linkService.addSocialMedia(updatedMedia);
  }

}
