import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from './auth-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const authPageRoutes: Routes = [
  {
    children: [
      {
        component: LoginComponent,
        path: 'login'
      },
      {
        component: SignupComponent,
        path: 'signup'
      }
    ],
    component: AuthPageComponent,
    path: '',
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(authPageRoutes)
  ]
})
export class AuthPageRoutingModule { }
