import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './../../core/auth/auth-guard.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.sass']
})
export class AdminPageComponent implements OnInit {

  constructor(private authService: AuthGuardService) { }

  ngOnInit() {
  }

  toggleAuth() {
    this.authService.isAuth = !this.authService.isAuth;
  }

}
