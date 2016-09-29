import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { AdminPageComponent } from './admin-page.component';
import { AuthGuardService } from './../../core/auth/auth-guard.service';




const adminPageRoutes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [AuthGuardService]
  }
];

export const adminPageRouting: ModuleWithProviders = RouterModule.forChild(adminPageRoutes);
