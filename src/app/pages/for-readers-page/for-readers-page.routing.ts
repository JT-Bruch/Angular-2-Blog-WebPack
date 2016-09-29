import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ForReadersPageComponent } from './for-readers-page.component';




const forReadersPageRoutes: Routes = [
  {
    path: '',
    component: ForReadersPageComponent
  }
];

export const forReadersPageRouting: ModuleWithProviders = RouterModule.forChild(forReadersPageRoutes);
