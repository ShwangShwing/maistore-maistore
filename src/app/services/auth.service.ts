import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { UserModel } from '../models/user.model';
import { WorkerModel } from '../models/worker.model';

import { UsersService } from './data/users.service';
import { WorkersService } from './data/workers.service';

@Injectable()
export class AuthService {
  private authState$: Observable<firebase.User>;

  constructor(private af: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private usersService: UsersService,
    private workersService: WorkersService) {

    this.authState$ = this.afAuth.authState;
  }

  getAuthState() {
    return this.authState$;
  }

  register(type: string, name: string, email: string, password: string): Promise<any> {
      if (type !== 'user' && type !== 'worker') {
        return Promise.reject('invalid_user_type');
      }

      return new Promise((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((createdEmailUser) => {
          const newUser: UserModel = {
            userId: createdEmailUser.uid,
            type: type,
            name: name
          };

          this.usersService.addUser(newUser);

          if (type === 'worker') {
            const newWorker: WorkerModel = {
              userId: newUser.userId,
              name: name,
              competencies: [],
              userRatings: [],
              completedProjects: []
            };

            this.workersService.addWorker(newWorker);
          }

          resolve();
        })
        .catch((error) => reject(error));
      });
  }

  login(email, password): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(error => reject(error));
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
