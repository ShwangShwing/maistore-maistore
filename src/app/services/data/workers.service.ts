import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { WorkerModel } from '../../models/worker.model';

import { workerList } from '../../in-memory-data/workers';

@Injectable()
export class WorkersService {
  private workers$: BehaviorSubject<WorkerModel[]>;

  constructor() {
    this.workers$ = new BehaviorSubject<WorkerModel[]>(workerList);
  }

  getAll(): Observable<WorkerModel[]> {
    return this.workers$;
  }
}
