/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogCategoryService } from './blog-category.service';

describe('Service: BlogCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogCategoryService]
    });
  });

  it('should ...', inject([BlogCategoryService], (service: BlogCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
