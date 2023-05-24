import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = null;

  constructor(private router: Router) {}

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
            // localStorage.setItem('token', token);            // Storing token in browser web storage
            this.router.navigate(['/users']);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }

  onLogout() {
    firebase
      .signOut(firebase.getAuth())
      .then(() => {
        setTimeout(() => {
          this.token = null;
          this.router.navigate(['/auth']);
        }, 1500);
      })
      .catch(console.error);
  }

  getToken() {
    return this.token;
    // if (localStorage.getItem('token')) return localStorage.getItem('token');
    // else return null;
  }

  isUserAuthenticated() {
    return this.token != null;
    // return localStorage.getItem('token') != null;
  }
}
