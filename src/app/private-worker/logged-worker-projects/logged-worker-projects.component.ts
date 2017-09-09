import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth.service';
import { CompletedProjectsService } from '../../services/data/completed-projects.service';
import { WorkersService } from '../../services/data/workers.service';
import { CompetenciesService } from '../../services/data/competencies.service';

import { CompletedProjectModel } from '../../models/completed-project.model';
import { WorkerModel } from '../../models/worker.model';
import { CompetencyModel } from '../../models/competency.model';

@Component({
  selector: 'app-logged-worker-projects',
  templateUrl: './logged-worker-projects.component.html',
  styleUrls: ['./logged-worker-projects.component.css']
})
export class LoggedWorkerProjectsComponent implements OnInit {
  projectIdForDelete: string = null;
  projects$: Observable<CompletedProjectModel[]>;
  competencies$: Observable<CompetencyModel[]>;
  newProjectName: string;
  checkedCompetencies: boolean[] = [];
  workerId: string;

  constructor(
    private authService: AuthService,
    private projectsService: CompletedProjectsService,
    private workersService: WorkersService,
    private competenciesService: CompetenciesService) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe(loggedUser => {
      this.workerId = loggedUser.uid;
      this.projects$ = this.projectsService.getWorkerProjects(this.workerId);
    });

    this.competencies$ = this.competenciesService.getAll();
  }

  createNewProject() {
    const competencies: CompetencyModel[] = [];

    for (const competencyName in this.checkedCompetencies) {
      if (this.checkedCompetencies[competencyName]) {
        competencies.push({name: competencyName});
      }
    }

    const newProject: CompletedProjectModel = {
      name: this.newProjectName,
      workerId: this.workerId,
      competencies: competencies,
      picturePaths: [],
      userRatings: []
    };

    this.projectsService.addProject(newProject)
      .then(() => {
        this.newProjectName = '';

        console.log(this.checkedCompetencies);
        for (const index in this.checkedCompetencies) {
          if (this.checkedCompetencies.hasOwnProperty(index)) {
            this.checkedCompetencies[index] = false;
          }
        }
        console.log(this.checkedCompetencies);
      });
  }

  deleteProject(projectId: string) {
    this.projectIdForDelete = projectId;
  }

  reallyDeleteProject(projectId: string) {
    if (this.projectIdForDelete === projectId) {
      console.log('deleting ' + projectId);
      this.projectsService.deleteProject(this.workerId, projectId);
    }

    this.projectIdForDelete = null;
  }

  cancelDeleteProject() {
    this.projectIdForDelete = null;
  }
}
