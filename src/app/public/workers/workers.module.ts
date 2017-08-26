import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { WorkerModule } from './worker/worker.module';
import { WorkerProjectsModule } from './worker-projects/worker-projects.module';

import { WorkersService } from '../../services/data/workers.service';

@NgModule({
  imports: [
    CommonModule,
    WorkerModule,
    WorkerProjectsModule
  ],
  declarations: [WorkersComponent],
  providers: [WorkersService]
})
export class WorkersModule { }
