/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ResponseOptions, Response, XHRBackend, HttpModule, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { createTranslateLoader } from './../../app.module';
import { TranslateModule, TranslateService, TranslateLoader } from 'ng2-translate/ng2-translate';

import { CreateArticlePageComponent } from './create-article-page.component';
import { BlogCreatorComponent } from './../../shared/blog-creator/blog-creator.component';

describe('HighlightDirectivePageComponent', () => {
  let component: CreateArticlePageComponent;
  let fixture: ComponentFixture<CreateArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateArticlePageComponent,
        BlogCreatorComponent
      ],
      imports: [
        HttpModule,
        TranslateModule
      ],
      providers: [
        TranslateService,
        TranslateLoader
      ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
