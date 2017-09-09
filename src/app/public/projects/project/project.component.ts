import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompletedProjectModel } from '../../../models/completed-project.model';
import { CompletedProjectsService } from '../../../services/data/completed-projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: CompletedProjectModel;
  projectId: string;

  constructor(
    private route: ActivatedRoute,
    private completedProjectsService: CompletedProjectsService
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('projectId');
    this.completedProjectsService.getById(this.projectId)
      .subscribe(project => this.project = project)
  }

}
