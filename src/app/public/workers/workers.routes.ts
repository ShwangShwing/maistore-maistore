import { Routes } from '@angular/router';

import { WorkersComponent } from './workers.component';
import { WorkerComponent } from './worker/worker.component';
import { WorkerProjectsComponent } from './worker-projects/worker-projects.component';

export const workersRoutes: Routes = [
    { path: '', component: WorkersComponent },
    { path: ':workerId', component: WorkerComponent },
    { path: ':workerId/projects', component: WorkerProjectsComponent },
];
