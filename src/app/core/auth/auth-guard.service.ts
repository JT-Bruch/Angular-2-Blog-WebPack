import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  isAuth: boolean = true;

  canActivate() {
    console.log('AuthGuard#canActivate called');
    return this.isAuth;
  }

}
