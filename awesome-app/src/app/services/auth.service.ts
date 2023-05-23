import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = null;

  constructor() {}

  onUserRegister(email: string, password: string) {
    firebase
      .createUserWithEmailAndPassword(firebase.getAuth(), email, password)
      .then((userCred) => console.log('REGISTER SUCCESS : ', userCred))
      .catch((err) => console.log(err));
  }

  onUserLogin(email: string, password: string) {
    firebase
      .signInWithEmailAndPassword(firebase.getAuth(), email, password)
      .then((userCred) => {
        firebase
          .getAuth()
          .currentUser.getIdToken()
          .then((token) => {
            console.log('TOKEN : ', token);
            this.token = token;
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }

  onLogout() {
    firebase
      .signOut(firebase.getAuth())
      .then(() => (this.token = null))
      .catch(console.error);
  }

  getToken() {
    return this.token;
  }

  isUserAuthenticated() {
    return this.token != null;
  }
}
