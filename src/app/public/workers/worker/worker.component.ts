import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  workerId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.workerId = this.route.snapshot.paramMap.get('workerId');
  }

}
