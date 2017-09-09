import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/data/users.service';

import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  firebaseUser$: Observable<firebase.User> = null;
  ourUser$: Observable<UserModel[]>;

  constructor(private authService: AuthService, private userService: UsersService) {
    this.title = 'maistore-app';
  }

  ngOnInit(): void {
    this.firebaseUser$ = this.authService.getAuthState();
    this.ourUser$ = null;
    this.firebaseUser$.subscribe(user => {
      if (user) {
        this.ourUser$ = this.userService.getByUserId(user.uid);
      } else {
        this.ourUser$ = null;
      }
    });
  }

  doLogout(): void {
    this.authService.logout();
  }


}
