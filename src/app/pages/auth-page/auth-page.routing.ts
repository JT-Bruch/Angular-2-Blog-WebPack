import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from './auth-page.component';
import { AuthGuardService } from './../../core/auth/auth-guard.service';

const authPageRoutes: Routes = [
  {
    canActivate: [AuthGuardService],
    component: AuthPageComponent,
    path: ''
  }
];

export const authPageRouting: ModuleWithProviders = RouterModule.forChild(authPageRoutes);
