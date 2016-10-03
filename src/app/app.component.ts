import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { ActivatedRoute, Route } from '@angular/router';
import { Title }     from '@angular/platform-browser';

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public isNotFoundPage: boolean = this.isWildcardRoute();
  private activeRoute: Route = this.route.routeConfig;


  constructor(translate: TranslateService,
              private route: ActivatedRoute,
              private titleService: Title) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    translate.get('appTitle').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });

  }

  private isWildcardRoute(): boolean {
    let bRetVal = false;
    if (this.activeRoute && this.activeRoute.path === '**') {
      bRetVal = true;
    }
    return bRetVal;
  }

}
