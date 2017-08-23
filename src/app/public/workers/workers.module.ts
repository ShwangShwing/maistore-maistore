import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WorkersComponent } from './workers.component';
import { WorkerModule } from './worker/worker.module';
import { WorkerProjectsModule } from './worker-projects/worker-projects.module';

import { workersRoutes } from './workers.routes';

@NgModule({
  imports: [
    CommonModule,
    WorkerModule,
    WorkerProjectsModule,
    RouterModule.forChild(workersRoutes)
  ],
  declarations: [WorkersComponent]
})
export class WorkersModule { }
