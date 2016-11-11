import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactInfoService } from './../../core/database/contact-info.service';

import { AuthGuardService } from './../../core/auth/auth-guard.service';
import { GlobalLinkService } from './../../core/database/global-link.service';
import { SocialMediaLinks } from './../../core/interfaces/social-media-links';

@Component({

  selector: 'app-footer',
  styleUrls: ['footer.component.scss'],
  templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {

  copywriteYear: string = this.linkService.copywriteYear;
  primaryTelephoneAddress: string = this.infoService.primaryCellPhone;
  primaryEmailAddress: string = this.infoService.primaryEmailAddress;
  socialMedia: Observable<SocialMediaLinks>;

  socialMediaStyle: string = 'footer-style';

  constructor(private infoService: ContactInfoService,
              private authService: AuthGuardService,
              private linkService: GlobalLinkService) { }

  ngOnInit() {
    this.socialMedia = this.linkService.socialMedia$;
  }

}
