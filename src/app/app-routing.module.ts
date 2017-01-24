import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    loadChildren: 'app/pages/about-page/about-page.module#AboutPageModule',
    path: 'about'
  },
  {
    loadChildren: 'app/pages/home-page/home-page.module#HomePageModule',
    path: 'home'
  },
  {
    loadChildren: 'app/pages/admin-page/admin-page.module#AdminPageModule',
    path: 'admin'
  },
  {
    loadChildren: 'app/pages/blog-post-page/blog-post-page.module#BlogPostPageModule',
    path: 'blogpost'
  },
  {
    loadChildren: 'app/pages/create-article-page/create-article-page.module#CreateArticlePageModule',
    path: 'createarticle'
  },
  {
    loadChildren: 'app/pages/home-page/home-page.module#HomePageModule',
    path: 'home'
  },
  {
    loadChildren: 'app/pages/auth-page/auth-page.module#AuthPageModule',
    path: 'auth'
  },
  {
    loadChildren: 'app/pages/more-page/more-page.module#MorePageModule',
    path: 'more'
  },
  {
    loadChildren: 'app/pages/for-readers-page/for-readers-page.module#ForReadersPageModule',
    path: 'readers'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ]
})
export class AppRoutingModule { }
