import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CompetenciesService } from '../../services/data/competencies.service';
import { WorkersService } from '../../services/data/workers.service';
import { UploadService } from '../../services/data/upload-service.service';
import { AuthService } from '../../services/auth.service';

import { CompetencyModel } from '../../models/competency.model';
import { WorkerModel } from '../../models/worker.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedWorker$: Observable<WorkerModel>;
  competencies$: Observable<CompetencyModel[]>;

  workerId: string;
  name: string;
  picUrl = 'assets/worker.png';
  checkedCompetencies: boolean[] = [];

  constructor(
    private authService: AuthService,
    private competenciesService: CompetenciesService,
    private workersService: WorkersService,
    private uploadService: UploadService) { }

  ngOnInit() {
    this.competencies$ = this.competenciesService.getAll();

    this.authService.getAuthState().subscribe(loggedUser => {
      this.workerId = loggedUser.uid;
      this.loggedWorker$ = this.workersService.getById(loggedUser.uid);

      this.loggedWorker$.subscribe(worker => {
        this.name = worker.name;
        this.picUrl = worker.picUrl || 'assets/worker.png';
        if (Array.isArray(worker.competencies)) {
          for (let i = 0; i < worker.competencies.length; i++) {
            this.checkedCompetencies[worker.competencies[i].name] = true;
          }
        }
      });
    });
  }

  onSave() {
    const competencies: CompetencyModel[] = [];

    for (const competencyName in this.checkedCompetencies) {
      if (this.checkedCompetencies[competencyName]) {
        competencies.push({name: competencyName});
      }
    }

    this.workersService.updateWorker(this.workerId, this.name, competencies);
  }

  fileChanged(e: Event) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    const file = target.files[0];
    this.uploadService.upload(this.workerId, file)
      .then(picUrl => {
        this.workersService.setWorkerPicUrl(this.workerId, picUrl);
      });
  }
}
