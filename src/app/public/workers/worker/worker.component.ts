import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { CompetenciesService } from '../../../services/data/competencies.service';
import { WorkersService } from '../../../services/data/workers.service';
import { UploadService } from '../../../services/data/upload-service.service';
import { AuthService } from '../../../services/auth.service';

import { CompetencyModel } from '../../../models/competency.model';
import { WorkerModel } from '../../../models/worker.model';
import { UsersService } from '../../../services/data/users.service';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  loggedUser$: Observable<UserModel>;
  worker$: Observable<WorkerModel>;
  competencies$: Observable<CompetencyModel[]>;
  workerRating: number = null;
  loggedUserId: string;
  workerId: string;

  isLoggedUser = false;

  checkedCompetencies: boolean[] = [];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private competenciesService: CompetenciesService,
    private workersService: WorkersService,
    private usersService: UsersService,
    private uploadService: UploadService) { }

  ngOnInit() {
    this.competencies$ = this.competenciesService.getAll();

    this.isLoggedUser = this.authService.getIsLoggedUser();

    this.authService.getAuthState().subscribe(loggedUser => {
      this.loggedUserId = null;
      this.loggedUser$ = null;

      if (loggedUser) {
        this.loggedUserId = loggedUser.uid;
        this.loggedUser$ = this.usersService.getById(loggedUser.uid);
      }

      this.workerId = this.route.snapshot.paramMap.get('workerId');

          this.worker$ = this.workersService.getById(this.workerId);

          this.worker$.subscribe(worker => {
            if (Array.isArray(worker.competencies)) {
              for (let i = 0; i < worker.competencies.length; i++) {
                this.checkedCompetencies[worker.competencies[i].name] = true;
              }
            }

            this.workerRating = null;
            if (loggedUser) {
              if (worker.userRatings && worker.userRatings[this.loggedUserId]) {
                this.workerRating = worker.userRatings[this.loggedUserId].rating;
              }
            }
          });
    });
  }

  rate(rating) {
    this.workersService.rateWorker(this.workerId, this.loggedUserId, rating);
  }
}
