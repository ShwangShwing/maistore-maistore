import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectModule } from './project/project.module';
import { CompletedProjectsService } from '../../services/data/completed-projects.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../app.routes';
import { KeysPipe } from '../../pipes/keys.pipe';

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    ProjectModule
  ],
  declarations: [ProjectsComponent, KeysPipe],
  providers: [CompletedProjectsService]
})
export class ProjectsModule { }
