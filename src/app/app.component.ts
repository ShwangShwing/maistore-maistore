import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.title = 'maistore-app';
    // this.items = af.list('/messages', {
    //   query: {
    //     limitToLast: 50
    //   }
    // });

    this.user = this.afAuth.authState;

  }
  createUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  checkIfLogged() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('logged');
      } else {
        console.log('not logged');
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  writeUserData(data: string) {  // data is a object {---}
    const user = this.afAuth.auth.currentUser,
      userID = user.uid;
    return this.af.database.ref('users/' + userID).set(data); // users/+ uid ---> path to the individual user data
  }

  updateUserData(data: string) {
    const user = this.afAuth.auth.currentUser,
      userID = user.uid;
    return this.af.database.ref('users/' + userID).push(data);
  }

  removeUserData() {
    const user = this.afAuth.auth.currentUser,
      userID = user.uid;
    return this.af.database.ref('users/' + userID).remove();
  }

  readUserDataOnce() {
    const userID = this.afAuth.auth.currentUser.uid;
    return this.af.database.ref('users/' + userID).once('value');
  }

  updateData(data: string) {
    return this.af.database.ref('products/').update(data);
  }

  // firebase.database().ref('products/supplements').set(supplements)

  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }
}
