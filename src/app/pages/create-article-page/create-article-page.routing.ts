import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateArticlePageComponent } from './create-article-page.component';
import { AuthGuardService } from './../../core/auth/auth-guard.service';

const createArticlePageRoutes: Routes = [
  {
    canActivate: [AuthGuardService],
    component: CreateArticlePageComponent,
    path: ''
  }
];

export const createArticlePageRouting: ModuleWithProviders = RouterModule.forChild(createArticlePageRoutes);
