import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthGuardService implements CanActivate {

  isAuth: boolean = true;
  firebaseAuthState: FirebaseAuthState = null;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.firebaseAuthState = user;
      } else {
        // user not logged in
        this.firebaseAuthState = null;
      }
    });
  }

  canActivate() {
    return this.firebaseAuthState != null;
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


}

