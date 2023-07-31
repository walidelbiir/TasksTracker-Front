import { TestBed } from '@angular/core/testing';

import { TaskRoutingResolveService } from './task-routing-resolve.service';

describe('TaskRoutingResolveService', () => {
  let service: TaskRoutingResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskRoutingResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
