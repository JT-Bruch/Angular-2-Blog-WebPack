webpackJsonp([1,12],{939:function(t,e,n){"use strict";var o=n(0),i=n(20),r=n(34),a=n(74),c=n(269),u=n(272),f=n(948),s=n(957);n.d(e,"MorePageModule",function(){return p});var l=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(){}return t=l([n.i(o.NgModule)({imports:[i.CommonModule,c.a,s.a,a.a,u.a],declarations:[f.a],exports:[f.a,i.CommonModule,r.FormsModule]}),d("design:paramtypes",[])],t)}()},948:function(t,e,n){"use strict";var o=n(0),i=n(270),r=n(167),a=n(74),c=n(65);n.d(e,"a",function(){return s});var u=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e,n,o){this.authService=t,this.authGuardService=e,this.translate=n,this.af=o}return t.prototype.ngOnInit=function(){},t.prototype.toggleAuth=function(){this.authService.isLoggedIn=!this.authService.isLoggedIn},t.prototype.toggleLang=function(t){this.translate.use(t)},t.prototype.loginGitHub=function(){this.authService.loginGitHub()},t.prototype.logoutGitHub=function(){this.authService.logoutGitHub()},t=u([n.i(o.Component)({selector:"app-more-page",template:n(975),styles:[n(966)]}),f("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object,"function"==typeof(s="undefined"!=typeof r.a&&r.a)&&s||Object,"function"==typeof(l="undefined"!=typeof a.b&&a.b)&&l||Object,"function"==typeof(d="undefined"!=typeof c.a&&c.a)&&d||Object])],t);var e,s,l,d}()},957:function(t,e,n){"use strict";var o=n(115),i=n(948);n.d(e,"a",function(){return a});var r=[{path:"",component:i.a}],a=o.RouterModule.forChild(r)},966:function(t,e){t.exports="\r\n"},975:function(t,e){t.exports='<p>\r\n  more-page works!\r\n</p>\r\n<button routerLink="/createarticle">Go To Create Article</button>\r\n<button routerLink="/admin">Go To Admin</button>\r\n<button (click)="toggleAuth()">Toggle Auth</button>\r\n<div>{{authService.getDisplayName()}}</div>\r\n<div>\r\n  <div> {{ (af.auth | async)?.uid }} </div>\r\n  <button (click)="loginGitHub()">Login</button>\r\n  <button (click)="logoutGitHub()">Logout</button>\r\n</div>\r\n\r\n<div>\r\n  <md-list>\r\n    <md-list-item (click)="toggleLang(\'en-US\')">\r\n      <img md-list-avatar src="./assets/flags-iso/flat/32/US.png" alt="...">\r\n      English (United States)\r\n    </md-list-item>\r\n  </md-list>\r\n  <md-list>\r\n    <md-list-item (click)="toggleLang(\'en-GB\')">\r\n      <img md-list-avatar src="./assets/flags-iso/flat/32/GB.png" alt="...">\r\n      English (United Kingdom)\r\n    </md-list-item>\r\n  </md-list>\r\n</div>\r\n'}});
//# sourceMappingURL=1.113d21e209c36c6019cd.bundle.map