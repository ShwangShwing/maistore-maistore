import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CompetencyModel } from '../../models/competency.model';

import { competencyList } from '../../in-memory-data/competencies';

@Injectable()
export class CompetenciesService {
  private competencies$: BehaviorSubject<CompetencyModel[]>;

  constructor() {
    this.competencies$ = new BehaviorSubject<CompetencyModel[]>(competencyList);
  }

  getAll(): Observable<CompetencyModel[]> {
    return this.competencies$;
  }
}
