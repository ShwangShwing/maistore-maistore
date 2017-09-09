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

  // A little confusing here. User id is the id of the firebase login user
  // This should return an array of one element because angular...
  getByUserId(userId: string) {
    return this.af.list(`users`, {query: {
      orderByChild: 'userId',
      equalTo: userId
    }});
  }

  addUser(newUser: UserModel) {
    this.users$.update(newUser.userId, newUser);
  }
}
