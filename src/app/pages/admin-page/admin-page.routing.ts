import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page.component';
import { AuthGuardService } from './../../core/auth/auth-guard.service';

const adminPageRoutes: Routes = [
  {
    canActivate: [AuthGuardService],
    component: AdminPageComponent,
    path: '',
  }
];

export const adminPageRouting: ModuleWithProviders = RouterModule.forChild(adminPageRoutes);
