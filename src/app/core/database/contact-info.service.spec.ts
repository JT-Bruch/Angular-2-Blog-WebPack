/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ContactInfoService } from './contact-info.service';

describe('Service: ContactInfoProvider', () => {
  beforeEach(() => {
    addProviders([ContactInfoService]);
  });

  it('should ...',
    inject([ContactInfoService],
      (service: ContactInfoService) => {
        expect(service).toBeTruthy();
      }));
});
