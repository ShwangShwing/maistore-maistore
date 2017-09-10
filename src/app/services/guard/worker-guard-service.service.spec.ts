import { TestBed, inject } from '@angular/core/testing';

import { WorkerGuardServiceService } from './worker-guard-service.service';

describe('WorkerGuardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerGuardServiceService]
    });
  });

  it('should be created', inject([WorkerGuardServiceService], (service: WorkerGuardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
