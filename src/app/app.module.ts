import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig as FireBaseConfig,
         firebaseAuthConfig as FirebaseAuthConfig } from '../environments/firebase';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CollapseModule } from 'ng2-bootstrap';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist/providers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

export function buildTranslationPathFromHref(baseHref: string) {
  let i18nFolderPath = '/assets/i18n';
  if (baseHref && baseHref.length > 0 && baseHref !== '/' ) {
    if (baseHref.endsWith('/')) {
      baseHref = baseHref.slice(0, baseHref.length - 1);
    }
    i18nFolderPath = `${baseHref}${i18nFolderPath}`;
  }
  return i18nFolderPath;
}

export function createTranslateLoader(http: Http, pl: PlatformLocation) {
  return new TranslateStaticLoader(http, buildTranslationPathFromHref(pl.getBaseHrefFromDOM()), '.json');
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    TranslateModule.forRoot({
          deps: [Http, PlatformLocation],
          provide: TranslateLoader,
          useFactory: (createTranslateLoader)
        }),
    AngularFireModule.initializeApp(FireBaseConfig, FirebaseAuthConfig),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    FlexLayoutModule.forRoot(),
    CoreModule,
    SharedModule,
    CollapseModule
  ],
  providers: [
    Title
  ]

})
export class AppModule {
}
