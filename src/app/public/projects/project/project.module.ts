import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../../pipes/pipes.module';
import { DirectivesModule } from '../../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [ProjectComponent]
})
export class ProjectModule { }
