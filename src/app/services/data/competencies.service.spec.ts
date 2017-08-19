import { TestBed, inject } from '@angular/core/testing';

import { CompetenciesService } from './competencies.service';

describe('CompetenciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetenciesService]
    });
  });

  it('should be created', inject([CompetenciesService], (service: CompetenciesService) => {
    expect(service).toBeTruthy();
  }));
});
