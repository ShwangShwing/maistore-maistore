import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WorkerComponent } from './worker.component';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ],
  declarations: [WorkerComponent]
})
export class WorkerModule { }
