import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WorkerModel } from '../../models/worker.model';
import { WorkersService } from '../../services/data/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  allWorkers$: Observable<WorkerModel[]>;

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.allWorkers$ = this.workersService.getAll();
  }

}
