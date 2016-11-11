/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstagramListService } from './instagram-list.service';

describe('Service: InstagramListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramListService]
    });
  });

  it('should ...', inject([InstagramListService], (service: InstagramListService) => {
    expect(service).toBeTruthy();
  }));
});
