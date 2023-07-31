import { TestBed } from '@angular/core/testing';

import { ProjectResolveService } from './project-resolve.service';

describe('ProjectResolveService', () => {
  let service: ProjectResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
