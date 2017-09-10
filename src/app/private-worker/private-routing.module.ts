import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoggedWorkerProjectsComponent } from './logged-worker-projects/logged-worker-projects.component';
import { EditWorkerProjectComponent } from './edit-worker-project/edit-worker-project.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'logged-worker-projects', component: LoggedWorkerProjectsComponent },
  { path: 'edit-worker-project/:projectId', component: EditWorkerProjectComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
