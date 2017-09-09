import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkerModel } from '../../../models/worker.model';
import { WorkersService } from '../../../services/data/workers.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  worker: WorkerModel;
  workerId: string;
  // picUrl = '../../../../assets/worker.png';

  constructor(
    private route: ActivatedRoute,
    private workersService: WorkersService
  ) { }

  ngOnInit() {
    this.workerId = this.route.snapshot.paramMap.get('workerId');
    this.workersService.getById(this.workerId)
      .subscribe(worker => this.worker = worker)
  }

}
