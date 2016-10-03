import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './../../core/auth/auth-guard.service';


@Component({
  selector: 'app-more-page',
  templateUrl: './more-page.component.html',
  styleUrls: ['./more-page.component.scss']
})
export class MorePageComponent implements OnInit {

  constructor(private authService: AuthGuardService) { }

  ngOnInit() {
  }

  toggleAuth() {
    this.authService.isAuth = !this.authService.isAuth;
  }

}
