import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthGuardService } from './../../core/auth/auth-guard.service';
import { GlobalLinkService } from './../../core/database/global-link.service';
import { SocialMediaLinks } from './../../core/interfaces/social-media-links';



@Component({

  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  providers: [],
})

export class HeaderComponent implements OnInit {


  isCollapsed: boolean = true;
  socialMediaStyle: string = 'header-style';

  socialMedia: Observable<SocialMediaLinks>;

  constructor(private authService: AuthGuardService,
             private linkService: GlobalLinkService) { }

  ngOnInit() {
    this.socialMedia = this.linkService.socialMedia$;
  }



  public collapsed(event: any): void {
  }

  public expanded(event: any): void {
  }

}
