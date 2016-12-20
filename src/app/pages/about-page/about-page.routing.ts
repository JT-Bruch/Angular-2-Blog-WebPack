import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page.component';

const aboutPageRoutes: Routes = [
  {
    component: AboutPageComponent,
    path: ''
  }
];

export const aboutPageRouting: ModuleWithProviders = RouterModule.forChild(aboutPageRoutes);
