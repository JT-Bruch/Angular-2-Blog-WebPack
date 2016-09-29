import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';




const pageNotFoundRoutes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  }
];

export const pageNotFoundRouting: ModuleWithProviders = RouterModule.forChild(pageNotFoundRoutes);
