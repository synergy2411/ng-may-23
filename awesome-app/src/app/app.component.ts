import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from './services/auth.service';
import { config } from 'dotenv';

config();

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
    const { apiKey, authDomain } = process.env;
    firebase.initializeApp({
      apiKey,
      authDomain,
    });
  }

  constructor(private authService: AuthService) {}

  isUserAuth() {
    return this.authService.isUserAuthenticated();
  }
}
