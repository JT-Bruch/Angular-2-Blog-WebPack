/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { Directive, ElementRef, Renderer } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('Directive: HighlightDirective', () => {
  it('should create an instance', () => {
    let renderer: Renderer;
    let el: ElementRef;
    let directive = new HighlightDirective(renderer, el);
    expect(true).toBeTruthy();
  });
});
