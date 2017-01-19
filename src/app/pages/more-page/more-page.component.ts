import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/auth/auth.service';
import { AuthGuardService } from './../../core/auth/auth-guard.service';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-more-page',
  styleUrls: ['./more-page.component.scss'],
  templateUrl: './more-page.component.html'
})
export class MorePageComponent implements OnInit {

  constructor(public authService: AuthService,
              private authGuardService: AuthGuardService,
              private translate: TranslateService,
              public af: AngularFire) { }

  public ngOnInit() {
  }

  public toggleAuth() {
    this.authService.isLoggedIn = !this.authService.isLoggedIn;
  }

  public toggleLang(langToUse: string) {
    this.translate.use(langToUse);
  }

  public loginGitHub() {
    this.authService.loginGitHub();
  }

  public logoutGitHub() {
     this.authService.logoutGitHub();
  }

}
