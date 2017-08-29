import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { WorkerModel } from '../../models/worker.model';
import { CompetencyModel } from '../../models/competency.model';

@Injectable()
export class WorkersService {
  private workers$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.workers$ = this.af.list('workers');
  }

  getAll(): Observable<WorkerModel[]> {
    return this.workers$;
  }

  addWorker(worker: WorkerModel): void {
    this.workers$.push(worker);
  }

  rateWorker(workerId: string, userId: string, rating: number): void {
    this.af.object(`workers/${workerId}/userRatings/${userId}`).set({ rating });
  }

  updateWorkerCompetencies(workerId: string, competencies: CompetencyModel[]): void {
    this.af.object(`workers/${workerId}/competencies`).set(competencies);
  }
}
