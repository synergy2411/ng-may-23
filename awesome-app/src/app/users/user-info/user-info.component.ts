import { Component, Input } from '@angular/core';
import { IUser } from 'src/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  @Input() user: IUser | undefined;

  dynamicClasses = { 'my-border': false, 'my-feature': true };

  dynamicStyles = {
    border: '2px red dashed',
    textDecoration: 'underline',
  };

  toggleClass() {
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
    this.dynamicClasses['my-feature'] = !this.dynamicClasses['my-feature'];
  }
}
