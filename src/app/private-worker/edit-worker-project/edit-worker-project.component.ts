import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../services/auth.service';
import { CompletedProjectsService } from '../../services/data/completed-projects.service';
import { WorkersService } from '../../services/data/workers.service';
import { CompetenciesService } from '../../services/data/competencies.service';
import { UploadService } from '../../services/data/upload-service.service';

import { CompletedProjectModel } from '../../models/completed-project.model';
import { CompetencyModel } from '../../models/competency.model';

@Component({
  selector: 'app-edit-worker-project',
  templateUrl: './edit-worker-project.component.html',
  styleUrls: ['./edit-worker-project.component.css']
})
export class EditWorkerProjectComponent implements OnInit {
  competencies$: Observable<CompetencyModel[]>;
  projectId: string;
  project$: Observable<CompletedProjectModel>;
  editedProject: CompletedProjectModel;
  checkedCompetencies: boolean[] = [];
  workerId: string;


  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private projectsService: CompletedProjectsService,
    private workersService: WorkersService,
    private competenciesService: CompetenciesService,
    private uploadService: UploadService) {}

  ngOnInit() {
    this.competencies$ = this.competenciesService.getAll();

    this.projectId = this.route.snapshot.paramMap.get('projectId');

    this.project$ = this.projectsService.getById(this.projectId);
    this.project$.subscribe(project => {
      this.editedProject = project;

      this.checkedCompetencies.fill(false);
      for (let i = 0; i < project.competencies.length; i++) {
        this.checkedCompetencies[project.competencies[i].name] = true;
      }
    });
  }

  saveProject() {
    const competencies: CompetencyModel[] = [];

    for (const competencyName in this.checkedCompetencies) {
      if (this.checkedCompetencies[competencyName]) {
        competencies.push({name: competencyName});
      }
    }

    this.editedProject.competencies = competencies;

    this.projectsService.editProject(this.editedProject);
  }

  fileChanged(e: Event) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    const file = target.files[0];
    this.uploadService.upload(`project-pics/${this.projectId}/pic-${Date.now()}`, file)
      .then(picUrl => {
        if (!Array.isArray(this.editedProject.picturePaths)) {
          this.editedProject.picturePaths = [picUrl];
        } else {
          this.editedProject.picturePaths.push(picUrl);
        }
      });
  }

  deletePhoto(id) {
    this.editedProject.picturePaths.splice(id, 1);
  }
}
