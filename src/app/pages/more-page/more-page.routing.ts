import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { MorePageComponent } from './more-page.component';




const morePageRoutes: Routes = [
  {
    path: '',
    component: MorePageComponent
  }
];

export const morePageRouting: ModuleWithProviders = RouterModule.forChild(morePageRoutes);
