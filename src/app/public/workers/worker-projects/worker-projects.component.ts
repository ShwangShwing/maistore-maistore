import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worker-projects',
  templateUrl: './worker-projects.component.html',
  styleUrls: ['./worker-projects.component.css']
})
export class WorkerProjectsComponent implements OnInit {
  workerId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.workerId = this.route.snapshot.paramMap.get('workerId');
  }

}
