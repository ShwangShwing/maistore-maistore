import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { CompetencyModel } from '../../models/competency.model';


@Injectable()
export class CompetenciesService {
  private competencies$: FirebaseListObservable<CompetencyModel[]>;

  constructor(private af: AngularFireDatabase) {
    this.competencies$ = this.af.list('competencies');
  }

  getAll(): Observable<CompetencyModel[]> {
    return this.competencies$;
  }
}
