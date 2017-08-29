import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CompletedProjectModel } from '../../models/completed-project.model';
import { CompletedProjectsService } from '../../services/data/completed-projects.service';
import { WorkersService } from '../../services/data/workers.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: CompletedProjectModel[];
  public worker: object;

  constructor(private projectsService: CompletedProjectsService, private workersService: WorkersService) {
    
   }

  ngOnInit() {
    this.projectsService.getAll()
    .subscribe(
      data => {
        this.projects = data;
        this.worker = this.workersService.getWorker(this.projects[0].workerId);
      }
    )
  };
}
