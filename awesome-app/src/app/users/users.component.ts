import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IUser } from 'src/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UsersComponent {
  user: IUser = {
    firstName: 'Bill',
    lastName: 'Gates',
    dob: new Date('Jan 23, 1965'),
    income: 50000,
    isWorking: true,
    company: 'Microsoft',
    votes: 120,
    image:
      'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg',
  };

  onMoreInfo(userCompany: string) {
    alert(`User is working with ${userCompany}`);
  }
}
