import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthGuardService } from './../../core/auth/auth-guard.service';
import { GlobalLinkService } from './../../core/database/global-link.service';
import { SocialMediaLinks } from './../../core/interfaces/social-media-links';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  socialMedia: Observable<SocialMediaLinks>;

  constructor(private authService: AuthGuardService,
             private linkService: GlobalLinkService) { }

  ngOnInit() {
    this.socialMedia = this.linkService.socialMedia$;
  }

  toggleAuth() {
    this.authService.isAuth = !this.authService.isAuth;
  }

  updateSocialMedia() {

  }

}
