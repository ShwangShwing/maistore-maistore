import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerComponent } from './worker.component';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [WorkerComponent]
})
export class WorkerModule { }
