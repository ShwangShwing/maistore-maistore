import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedWorkerProjectsComponent } from './logged-worker-projects.component';
import { FormsModule } from '@angular/forms';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule
  ],
  declarations: [LoggedWorkerProjectsComponent]
})
export class LoggedWorkerProjectsModule { }
