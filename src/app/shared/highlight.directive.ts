import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  /** Highlight the attached element in gold */
  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gold');
    console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }

}


