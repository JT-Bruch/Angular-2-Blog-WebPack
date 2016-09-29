import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { AboutPageComponent } from './about-page.component';




const aboutPageRoutes: Routes = [
  {
    path: '',
    component: AboutPageComponent
  }
];

export const aboutPageRouting: ModuleWithProviders = RouterModule.forChild(aboutPageRoutes);
