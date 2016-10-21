import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthGuardService implements CanActivate {

  isAuth: boolean = true;
  firebaseAuthState: FirebaseAuthState = null;
  notLoggedIn: string;

  constructor(private af: AngularFire,
              private translate: TranslateService) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.firebaseAuthState = user;
      } else {
        // user not logged in
        this.firebaseAuthState = null;
      }
    });

    this.translate.get('auth.notLoggedIn').subscribe((translationObj) => { this.notLoggedIn = translationObj; });
  }

  canActivate() {
    return this.firebaseAuthState != null;
  }

  getDisplayName() {
    return this.firebaseAuthState ? this.firebaseAuthState.auth.displayName : this.notLoggedIn;
  }

  logout() {
    this.af.auth.logout();
  }

  loginGitHub() {
    // Social provider popup
    this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup,
    });
  }

  logoutGitHub() {
     this.logout();
  }

  loginGoogle() {
    // Social provider popup
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  logoutGoogle() {
     this.logout();
  }

  loginStandard(email: string, password: string) {
    // Standard Email
    this.af.auth.login(
      {
        email,
        password
      },
      {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }

  logoutStandard() {
     this.logout();
  }


}

