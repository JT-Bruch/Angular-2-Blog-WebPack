/* tslint:disable:no-unused-variable */

import { adds, async, inject } from '@angular/core/testing';
import { GlobalLinkService } from './global-link.service';

describe('Service: GlobalLink', () => {
  beforeEach(() => {
    adds([GlobalLinkService]);
  });

  it('should ...',
    inject([GlobalLinkService],
      (service: GlobalLinkService) => {
        expect(service).toBeTruthy();
      }));
});
