import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { BlogPostPageComponent } from './blog-post-page.component';




const blogPostPageRoutes: Routes = [
  {
    path: ':id',
    component: BlogPostPageComponent
  }
];

export const blogPostPageRouting: ModuleWithProviders = RouterModule.forChild(blogPostPageRoutes);
