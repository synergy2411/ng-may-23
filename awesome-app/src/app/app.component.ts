import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'awesome-app';
  toggle = true;

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDEY8BPxvySa7BdgipNCocgP9AY23pV288',
      authDomain: 'landis-gyr-may-23.firebaseapp.com',
    });
  }

  constructor(private authService: AuthService) {}

  isUserAuth() {
    return this.authService.isUserAuthenticated();
  }
}
