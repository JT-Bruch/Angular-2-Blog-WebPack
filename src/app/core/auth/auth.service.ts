import { Injectable } from '@angular/core';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  firebaseAuthState: FirebaseAuthState = null;
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private af: AngularFire,
              private translate: TranslateService) {

    this.subscribeToLogin();
  }

  private subscribeToLogin() {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.firebaseAuthState = user;
        this.isLoggedIn = true;
      } else {
        // user not logged in
        this.firebaseAuthState = null;
        this.isLoggedIn = false;
      }
    });
  }

  getDisplayName() {
    return this.firebaseAuthState ? this.firebaseAuthState.auth.displayName : null;
  }

  logout() {
    this.af.auth.logout();
    this.isLoggedIn = false;
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
