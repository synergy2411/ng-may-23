import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { USER_DATA } from 'src/model/mocks';
import { IUser } from 'src/model/user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.users = USER_DATA;
    this.dataService.getUserData().subscribe((data) => (this.users = data));
  }

  onMoreInfo(userCompany: string) {
    alert(`User is working with ${userCompany}`);
  }
}
