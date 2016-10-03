import { Component, OnInit } from '@angular/core';
import { ContactInfoService } from './../../core/database/contact-info.service';
import { GlobalLinkService } from './../../core/database/global-link.service';

@Component({

  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {

  copywriteYear: string = this.linkService.copywriteYear;
  primaryTelephoneAddress: string = this.infoService.primaryCellPhone;
  primaryEmailAddress: string = this.infoService.primaryEmailAddress;
  socialMediaStyle: string = 'footer-style';

  constructor(private linkService: GlobalLinkService,
              private infoService: ContactInfoService) { }

  ngOnInit() {
  }

}
