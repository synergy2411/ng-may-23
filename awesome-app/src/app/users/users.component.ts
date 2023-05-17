import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { USER_DATA } from 'src/model/mocks';
import { IUser } from 'src/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UsersComponent implements OnInit {
  users: IUser[];

  ngOnInit(): void {
    this.users = USER_DATA;
  }

  onMoreInfo(userCompany: string) {
    alert(`User is working with ${userCompany}`);
  }
}
