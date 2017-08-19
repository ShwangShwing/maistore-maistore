import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';

import { ProjectModule } from './project/project.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
