import { TestBed, inject } from '@angular/core/testing';

import { UserGuardServiceService } from './user-guard-service.service';

describe('UserGuardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGuardServiceService]
    });
  });

  it('should be created', inject([UserGuardServiceService], (service: UserGuardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
