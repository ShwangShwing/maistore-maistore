import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompletedProjectModel } from '../../../models/completed-project.model';
import { CompletedProjectsService } from '../../../services/data/completed-projects.service';
import { CompetencyModel } from '../../../models/competency.model';
import { AuthService } from '../../../services/auth.service';
import { WorkersService } from '../../../services/data/workers.service';
import { CompetenciesService } from '../../../services/data/competencies.service';
import { UploadService } from '../../../services/data/upload-service.service';
import { Observable } from 'rxjs/Observable';
import { WorkerModel } from '../../../models/worker.model';
import { UsersService } from '../../../services/data/users.service';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  competencies$: Observable<CompetencyModel[]>;
  projectId: string;
  project$: Observable<CompletedProjectModel>;
  project: CompletedProjectModel;
  worker: WorkerModel;
  checkedCompetencies: boolean[] = [];
  workerId: string;
  loggedUserId: string;
  loggedUser$: Observable<UserModel>;
  projectRating: number = null;
  isLoggedUser = false;

  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
    private authService: AuthService,
    private projectsService: CompletedProjectsService,
    private workersService: WorkersService,
    private competenciesService: CompetenciesService,
    private uploadService: UploadService) {}

  ngOnInit() {
    this.competencies$ = this.competenciesService.getAll();

    this.authService.getAuthState().subscribe(loggedUser => {
      this.loggedUserId = null;
      this.loggedUser$ = null;

      this.isLoggedUser = this.authService.getIsLoggedUser();

      if (loggedUser) {
        this.loggedUserId = loggedUser.uid;
        this.loggedUser$ = this.usersService.getById(loggedUser.uid);
      }

      this.projectId = this.route.snapshot.paramMap.get('projectId');

      this.project$ = this.projectsService.getById(this.projectId);
      this.project$.subscribe(project => {
        this.project = project;

        this.checkedCompetencies.fill(false);
        for (let i = 0; i < project.competencies.length; i++) {
          this.checkedCompetencies[project.competencies[i].name] = true;
        }

        const worker$ = this.workersService.getById(project.workerId);
        worker$.subscribe(worker => this.worker = worker);

        this.projectRating = null;
        if (loggedUser) {
          if (project.userRatings && project.userRatings[this.loggedUserId]) {
            this.projectRating = project.userRatings[this.loggedUserId].rating;
          }
        }
        console.log(this.loggedUserId);
        console.log(project.userRatings);
      });
    });
  }

  rate(rating) {
    this.projectsService.rateProject(this.projectId, this.loggedUserId, this.project.workerId, rating);
  }
}
