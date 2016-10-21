import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './../../core/auth/auth-guard.service';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-more-page',
  templateUrl: './more-page.component.html',
  styleUrls: ['./more-page.component.scss']
})
export class MorePageComponent implements OnInit {

  constructor(private authService: AuthGuardService,
              private translate: TranslateService,
              private af: AngularFire) { }

  ngOnInit() {
  }

  toggleAuth() {
    this.authService.isAuth = !this.authService.isAuth;
  }

  toggleLang(langToUse: string) {
    this.translate.use(langToUse);
  }

  loginGitHub() {
    this.authService.loginGitHub();
  }

  logoutGitHub() {
     this.authService.logoutGitHub();
  }

}
