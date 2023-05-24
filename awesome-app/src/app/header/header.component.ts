import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAuthenticated() {
    return this.authService.isUserAuthenticated();
  }

  ngOnInit(): void {}

  onLogout() {
    this.authService.onLogout();
  }
}
