import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { WorkerProjectsComponent } from './worker-projects/worker-projects.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkersComponent, WorkerProjectsComponent]
})
export class WorkersModule { }
