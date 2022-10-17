import { TestBed } from '@angular/core/testing';

import { SerbaService } from './serba.service';

describe('SerbaService', () => {
  let service: SerbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
