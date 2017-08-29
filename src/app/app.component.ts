import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  user: Observable<firebase.User>;

  constructor(private authService: AuthService) {
    this.title = 'maistore-app';
  }

  ngOnInit(): void {
    this.user = this.authService.getAuthState();
  }
}
