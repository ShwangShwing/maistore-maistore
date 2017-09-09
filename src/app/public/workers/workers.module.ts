import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { WorkerModule } from './worker/worker.module';
import { WorkerProjectsModule } from './worker-projects/worker-projects.module';
import { RouterModule } from '@angular/router';

import { WorkersService } from '../../services/data/workers.service';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    WorkerModule,
    WorkerProjectsModule,
    PipesModule
  ],
  declarations: [WorkersComponent],
  providers: [WorkersService]
})
export class WorkersModule { }
