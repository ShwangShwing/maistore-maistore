import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectModule } from './project/project.module';
import { CompletedProjectsService } from '../../services/data/completed-projects.service';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule
  ],
  declarations: [ProjectsComponent],
  providers: [CompletedProjectsService]
})
export class ProjectsModule { }
