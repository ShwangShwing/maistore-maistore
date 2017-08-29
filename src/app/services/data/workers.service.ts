import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { WorkerModel } from '../../models/worker.model';
import { CompetencyModel } from '../../models/competency.model';

import { workerList } from '../../in-memory-data/workers';
import { competencyList } from '../../in-memory-data/competencies';

@Injectable()
export class WorkersService {
  private workers$: BehaviorSubject<WorkerModel[]>;

  constructor() {
    this.workers$ = new BehaviorSubject<WorkerModel[]>(workerList);
  }

  getAll(): Observable<WorkerModel[]> {
    return this.workers$;
  }

  addWorker(worker: WorkerModel): void {
    workerList.push(worker);
    this.workers$.next(workerList);
  }

  rateWorker(workerId: string, userId: string, rating: number): void {
    const worker = workerList.find(curWorker => curWorker.id === workerId);

    if (!worker) {
      return;
    }

    const userRating = worker.userRatings.find(u => u.userId === userId);

    if (rating) {
      userRating.rating = rating;
    } else {
      worker.userRatings.push({userId, rating});
    }

    this.workers$.next(workerList);
  }

  updateWorkerCompetencies(workerId: string, competencyIds: string[]): void {
    const worker = this.getWorker(workerId);
    if (!worker) {
      return;
    }

    const updatedWorkerCompetencies = [];
    competencyIds.forEach(competencyId => {
      const curCompetency = competencyList.find(comp => comp.id === competencyId);
      if (curCompetency) {
        updatedWorkerCompetencies.push(curCompetency);
      }
    });

    worker.competencies = updatedWorkerCompetencies;

    this.workers$.next(workerList);
  }
   getWorker(workerId: string) {
    return workerList.find(curWorker => curWorker.id === workerId);
   }
}
