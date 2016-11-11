import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig as FireBaseConfig,
         firebaseAuthConfig as FirebaseAuthConfig } from '../environments/firebase';
import { MaterialModule } from '@angular/material';

import { CollapseModule } from 'ng2-bootstrap/components/collapse';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/dist/providers';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
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
    MaterialModule.forRoot(),
    TranslateModule.forRoot({
          deps: [Http],
          provide: TranslateLoader,
          useFactory: (createTranslateLoader)
        }),
    AngularFireModule.initializeApp(FireBaseConfig, FirebaseAuthConfig),
    Angulartics2Module.forRoot(),
    routing,
    CoreModule,
    SharedModule,
    CollapseModule
  ],
  providers: [
    Title,
    Angulartics2GoogleAnalytics
  ]

})
export class AppModule {
}
