import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { WorkersModule } from './workers/workers.module';
import { ProjectsModule } from './projects/projects.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';

import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    WorkersModule,
    ProjectsModule,
    RegisterModule,
    LoginModule,
    LogoutModule,
    PublicRoutingModule
  ],
  declarations: []
})
export class PublicModule { }
