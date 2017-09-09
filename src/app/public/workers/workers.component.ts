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
  workers$: Observable<WorkerModel[]>;

  $photo: '../../../assets/worker.png';
  constructor(private workersService: WorkersService) {}

  ngOnInit() {
    this.workers$ = this.workersService.getAll();
  }

}
