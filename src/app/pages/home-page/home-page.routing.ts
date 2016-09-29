import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { HomePageComponent } from './home-page.component';




const homePageRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

export const homePageRouting: ModuleWithProviders = RouterModule.forChild(homePageRoutes);
