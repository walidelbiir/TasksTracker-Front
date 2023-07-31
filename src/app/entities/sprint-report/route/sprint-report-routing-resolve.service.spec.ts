import { TestBed } from '@angular/core/testing';

import { SprintReportRoutingResolveService } from './sprint-report-routing-resolve.service';

describe('SprintReportRoutingResolveService', () => {
  let service: SprintReportRoutingResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintReportRoutingResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
