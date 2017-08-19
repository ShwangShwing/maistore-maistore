import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModule } from './profile/profile.module';
import { LoggedWorkerProjectsModule } from './logged-worker-projects/logged-worker-projects.module';
import { NewWorkerProjectModule } from './new-worker-project/new-worker-project.module';
import { EditWorkerProjectModule } from './edit-worker-project/edit-worker-project.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    LoggedWorkerProjectsModule,
    NewWorkerProjectModule,
    EditWorkerProjectModule
  ],
  declarations: []
})
export class PrivateWorkerModule { }
