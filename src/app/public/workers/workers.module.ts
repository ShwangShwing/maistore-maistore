import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { WorkerModule } from './worker/worker.module';
import { WorkerProjectsModule } from './worker-projects/worker-projects.module';

@NgModule({
  imports: [
    CommonModule,
    WorkerModule,
    WorkerProjectsModule
  ],
  declarations: [WorkersComponent]
})
export class WorkersModule { }
