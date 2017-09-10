import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { LoggedWorkerProjectsModule } from './logged-worker-projects/logged-worker-projects.module';
import { EditWorkerProjectModule } from './edit-worker-project/edit-worker-project.module';
import { CompetenciesService } from '../services/data/competencies.service';
import { WorkersService } from '../services/data/workers.service';
import { UploadService } from '../services/data/upload-service.service';
import { PrivateRoutingModule } from './private-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    LoggedWorkerProjectsModule,
    EditWorkerProjectModule,
    PrivateRoutingModule
  ],
  declarations: [],
  providers: [
    CompetenciesService,
    WorkersService,
    UploadService
  ]
})
export class PrivateWorkerModule { }
