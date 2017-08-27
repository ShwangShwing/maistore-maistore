import { Component, OnInit } from '@angular/core';

import { IWorker } from './worker/worker';
import { WorkersService } from '../../services/data/workers.service';

@Component({
  selector: 'app-workers',
  providers: [WorkersService],
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  errorMessage: string;
  filteredWorkers: IWorker[];
  workers: IWorker[] = [];
  constructor(private _workersService: WorkersService) { }
  // constructor() { }

  ngOnInit(): void {
    this._workersService.getWorkers()
        .subscribe(workers => {
          this.workers = workers,
          this.filteredWorkers = this.workers
        },
            error => this.errorMessage = <any>error);
    }
}
