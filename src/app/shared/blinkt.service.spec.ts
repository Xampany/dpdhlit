import { TestBed } from '@angular/core/testing';

import { BlinktService } from './blinkt.service';

describe('BlinktService', () => {
  let service: BlinktService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlinktService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
