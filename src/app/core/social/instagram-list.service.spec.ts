/* tslint:disable:no-unused-variable */

import { adds, async, inject } from '@angular/core/testing';
import { InstagramListService } from './instagram-list.service';

describe('Service: InstagramList', () => {
  beforeEach(() => {
    adds([InstagramListService]);
  });

  it('should ...',
    inject([InstagramListService],
      (service: InstagramListService) => {
        expect(service).toBeTruthy();
      }));
});
