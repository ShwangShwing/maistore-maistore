import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { UserModel } from '../../models/user.model';

@Injectable()
export class UsersService {
  private users$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.users$ = this.af.list('users');
  }

  getById(id: string) {
    return this.af.object(`users/${id}`);
  }

  addUser(newUser: UserModel) {
    this.users$.push(newUser);
  }
}
