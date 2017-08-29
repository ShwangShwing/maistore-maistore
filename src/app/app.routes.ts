import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { WorkersComponent } from './public/workers/workers.component';
import { WorkerComponent } from './public/workers/worker/worker.component';
import { WorkerProjectsComponent } from './public/workers/worker-projects/worker-projects.component';
import { ProjectsComponent } from './public/projects/projects.component';
import { ProjectComponent } from './public/projects/project/project.component';
import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import { LogoutComponent } from './public/logout/logout.component';

import { ProfileComponent } from './private-worker/profile/profile.component';
import { LoggedWorkerProjectsComponent } from './private-worker/logged-worker-projects/logged-worker-projects.component';
import { NewWorkerProjectComponent } from './private-worker/new-worker-project/new-worker-project.component';
import { EditWorkerProjectComponent } from './private-worker/edit-worker-project/edit-worker-project.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},

    { path: 'home', component: HomeComponent },
    { path: 'workers', component: WorkersComponent },
    { path: 'workers/:workerId', component: WorkerComponent },
    { path: 'workers/:workerId/projects', component: WorkerProjectsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:projectId', component: ProjectComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

    { path: 'profile', component: ProfileComponent },
    { path: 'logged-worker-projects', component: LoggedWorkerProjectsComponent },
    { path: 'new-worker-project', component: NewWorkerProjectComponent },
    { path: 'edit-worker-project/:projectId', component: EditWorkerProjectComponent },

    { path: '**', redirectTo: 'home'},
];
