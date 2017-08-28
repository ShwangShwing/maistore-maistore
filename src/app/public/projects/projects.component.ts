import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CompletedProjectModel } from '../../models/completed-project.model';
import { CompletedProjectsService } from '../../services/data/completed-projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  allProjects: Observable<CompletedProjectModel[]>;

  constructor(private projectsService: CompletedProjectsService) { }

  ngOnInit() {
    this.allProjects = this.projectsService.getAll();
  }
}
