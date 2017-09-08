import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { calculateAverageRating } from '../../helpers/arithmetic-helpers';

import { WorkerModel } from '../../models/worker.model';
import { CompetencyModel } from '../../models/competency.model';


@Injectable()
export class WorkersService {
  private workers$: FirebaseListObservable<WorkerModel[]>;
  private allWorkers: WorkerModel[];

  constructor(private af: AngularFireDatabase) {
    this.workers$ = this.af.list('workers');

    this.workers$.subscribe(workerList => {
      this.allWorkers = workerList;
    });
  }

  getAll(): Observable<WorkerModel[]> {
    return this.workers$;
  }

  getById(id: string) {
    return this.af.object(`workers/${id}`);
  }

  addWorker(worker: WorkerModel): void {
    this.workers$.update(worker.userId, worker);
  }

  rateWorker(workerId: string, userId: string, rating: number): void {
    this.af.object(`workers/${workerId}/userRatings/${userId}`).set({ rating });
  }

  updateWorker(workerId: string, name: string, competencies: CompetencyModel[]): void {
    this.af.object(`workers/${workerId}/competencies`).set(competencies);
    this.af.object(`workers/${workerId}/name`).set(name);
    this.af.object(`users/${workerId}/name`).set(name);
  }

  setWorkerPicUrl(workerId: string, picUrl: string) {
    this.af.object(`workers/${workerId}/picUrl`).set(picUrl);
  }

  getWorkersByName(workerName: string): WorkerModel[] {
    return this.allWorkers.filter(worker => worker.name.indexOf(workerName) >= 0);
  }

  getWorkersByFilter(competencyIds: string[], minRating: number) {
    return this.allWorkers.filter(worker => {
      const averageRating = calculateAverageRating(worker.userRatings);
      if (averageRating < minRating) {
        return false;
      }

      let workerHasCompetency = false;
      for (let i = 0; i < competencyIds.length; i++) {
        if (typeof worker.competencies[competencyIds[i]] !== 'undefined') {
          workerHasCompetency = true;
          break;
        }
      }

      if (!workerHasCompetency) {
        return false;
      }

      return true;
    });
  }
}
