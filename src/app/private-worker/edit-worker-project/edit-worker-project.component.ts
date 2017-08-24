import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-worker-project',
  templateUrl: './edit-worker-project.component.html',
  styleUrls: ['./edit-worker-project.component.css']
})
export class EditWorkerProjectComponent implements OnInit {
  projectId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('projectId');
  }

}
