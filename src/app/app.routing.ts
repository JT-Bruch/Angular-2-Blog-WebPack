import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', loadChildren: 'app/pages/about-page/about-page.module#AboutPageModule' },
  { path: 'admin', loadChildren: 'app/pages/admin-page/admin-page.module#AdminPageModule' },
  { path: 'blogpost', loadChildren: 'app/pages/blog-post-page/blog-post-page.module#BlogPostPageModule' },
  { path: 'createarticle', loadChildren: 'app/pages/create-article-page/create-article-page.module#CreateArticlePageModule' },
  { path: 'home', loadChildren: 'app/pages/home-page/home-page.module#HomePageModule' },
  { path: 'login', loadChildren: 'app/pages/auth-page/auth-page.module#AuthPageModule' },
  { path: 'more', loadChildren: 'app/pages/more-page/more-page.module#MorePageModule' },
  { path: 'readers', loadChildren: 'app/pages/for-readers-page/for-readers-page.module#ForReadersPageModule' },
  { path: '**', loadChildren: 'app/pages/page-not-found/page-not-found.module#PageNotFoundModule' },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
