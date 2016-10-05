import './rxjs-extensions';

import { NgModule }       from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig as FireBaseConfig } from '../environments/firebase';
import { MaterialModule } from '@angular/material';

import { AppComponent }       from './app.component';
import { routing } from './app.routing';


import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


import { HeaderComponent }   from './layout/header/header.component';
import { FooterComponent }   from './layout/footer/footer.component';
import { SidebarComponent }   from './layout/sidebar/sidebar.component';

import { CollapseModule } from 'ng2-bootstrap/components/collapse';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
          deps: [Http]
        }),
    AngularFireModule.initializeApp(FireBaseConfig),
    routing,
    CoreModule,
    SharedModule,
    CollapseModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent

  ],
  providers: [
    Title
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
