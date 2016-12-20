import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForReadersPageComponent } from './for-readers-page.component';

const forReadersPageRoutes: Routes = [
  {
    component: ForReadersPageComponent,
    path: ''
  }
];

export const forReadersPageRouting: ModuleWithProviders = RouterModule.forChild(forReadersPageRoutes);
