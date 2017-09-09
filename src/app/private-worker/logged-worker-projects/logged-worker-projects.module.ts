import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedWorkerProjectsComponent } from './logged-worker-projects.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    RouterModule
  ],
  declarations: [LoggedWorkerProjectsComponent]
})
export class LoggedWorkerProjectsModule { }
