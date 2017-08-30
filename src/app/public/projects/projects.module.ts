import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectModule } from './project/project.module';
import { CompletedProjectsService } from '../../services/data/completed-projects.service';

import { KeysPipe } from '../../pipes/keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule
  ],
  declarations: [ProjectsComponent, KeysPipe],
  providers: [CompletedProjectsService]
})
export class ProjectsModule { }
