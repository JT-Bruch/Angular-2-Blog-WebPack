import { AuthService } from './../../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  public loginGoogle() {
    this.authService.loginGoogle();
  }

  public loginGitHub() {
    this.authService.loginGitHub();
  }

  public logout() {
     this.authService.logout();
  }
}
