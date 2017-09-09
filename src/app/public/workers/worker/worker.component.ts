import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { CompetenciesService } from '../../../services/data/competencies.service';
import { WorkersService } from '../../../services/data/workers.service';
import { UploadService } from '../../../services/data/upload-service.service';
import { AuthService } from '../../../services/auth.service';

import { CompetencyModel } from '../../../models/competency.model';
import { WorkerModel } from '../../../models/worker.model';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  worker$: Observable<WorkerModel>;
  competencies$: Observable<CompetencyModel[]>;

  checkedCompetencies: boolean[] = [];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private competenciesService: CompetenciesService,
    private workersService: WorkersService,
    private uploadService: UploadService) { }

  ngOnInit() {
    this.competencies$ = this.competenciesService.getAll();

    const workerId = this.route.snapshot.paramMap.get('workerId');

    this.worker$ = this.workersService.getById(workerId);

    this.worker$.subscribe(worker => {
      if (Array.isArray(worker.competencies)) {
        for (let i = 0; i < worker.competencies.length; i++) {
          this.checkedCompetencies[worker.competencies[i].name] = true;
        }
      }
    });
  }
}
