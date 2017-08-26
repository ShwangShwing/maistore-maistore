import { TestBed, inject } from '@angular/core/testing';

import { CompletedProjectsService } from './completed-projects.service';

describe('CompletedProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletedProjectsService]
    });
  });

  it('should be created', inject([CompletedProjectsService], (service: CompletedProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
