import { TestBed } from '@angular/core/testing';

import { ApifService } from './apif.service';

describe('ApifService', () => {
  let service: ApifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
