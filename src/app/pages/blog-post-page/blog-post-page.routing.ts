import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPostPageComponent } from './blog-post-page.component';

const blogPostPageRoutes: Routes = [
  {
    component: BlogPostPageComponent,
    path: ':id'
  }
];

export const blogPostPageRouting: ModuleWithProviders = RouterModule.forChild(blogPostPageRoutes);
