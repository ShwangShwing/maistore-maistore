import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { WorkersModule } from './workers/workers.module';
import { ProjectsModule } from './projects/projects.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    WorkersModule,
    ProjectsModule,
    RegisterModule,
    LoginModule
  ],
  declarations: []
})
export class PublicModule { }
