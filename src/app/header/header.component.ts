import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  user: Observable<firebase.User> = null;

  constructor(private authService: AuthService) {
    this.title = 'maistore-app';
  }

  ngOnInit(): void {
    this.user = this.authService.getAuthState();
  }

  doLogout(): void {
    this.authService.logout();
  }
}
