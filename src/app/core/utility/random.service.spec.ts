/* tslint:disable:no-unused-variable */

import { adds, async, inject } from '@angular/core/testing';
import { RandomService } from './random.service';

describe('Service: Random', () => {
  beforeEach(() => {
    adds([RandomService]);
  });

  it('should ...',
    inject([RandomService],
      (service: RandomService) => {
        expect(service).toBeTruthy();
      }));
});
