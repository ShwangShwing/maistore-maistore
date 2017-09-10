import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../public/home/home.component';
import { WorkerGuardServiceService } from '../services/guard/worker-guard-service.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },

  { path: 'public', loadChildren: '../public/public.module#PublicModule' },

  { path: 'private', loadChildren: '../private-worker/private-worker.module#PrivateWorkerModule', canActivate: [WorkerGuardServiceService]},

  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  providers: [WorkerGuardServiceService]
})
export class RootRoutingModule {
}
