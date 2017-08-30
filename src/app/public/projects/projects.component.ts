import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { KeysPipe } from '../../pipes/keys.pipe';
import { CompletedProjectModel } from '../../models/completed-project.model';
import { WorkerModel } from '../../models/worker.model';

import { CompletedProjectsService } from '../../services/data/completed-projects.service';
import { WorkersService } from '../../services/data/workers.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects$: Observable<CompletedProjectModel[]>;

  constructor(
    private projectsService: CompletedProjectsService,
    private workersService: WorkersService) {}

  ngOnInit() {
    this.projects$ = this.projectsService.getAll();
  }

  getWorker(workerId): Observable<WorkerModel> {
    return this.workersService.getById(workerId);
  }
}
