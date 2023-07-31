import { TestBed } from '@angular/core/testing';

import { DayOffRoutingResolveService } from './day-off-routing-resolve.service';

describe('DayOffRoutingResolveService', () => {
  let service: DayOffRoutingResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayOffRoutingResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
