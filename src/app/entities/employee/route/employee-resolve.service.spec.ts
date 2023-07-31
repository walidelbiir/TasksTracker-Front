import { TestBed } from '@angular/core/testing';

import { EmployeeResolveService } from './employee-resolve.service';

describe('EmployeeResolveService', () => {
  let service: EmployeeResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
