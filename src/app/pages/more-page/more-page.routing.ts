import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MorePageComponent } from './more-page.component';

const morePageRoutes: Routes = [
  {
    component: MorePageComponent,
    path: ''
  }
];

export const morePageRouting: ModuleWithProviders = RouterModule.forChild(morePageRoutes);
