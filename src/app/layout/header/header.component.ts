import { Component, OnInit } from '@angular/core';

import { GlobalLinkService } from '../../core/database/global-link.service';



@Component({

  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  providers: [],
})

export class HeaderComponent implements OnInit {


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
