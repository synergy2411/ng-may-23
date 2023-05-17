import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/model/comment';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css'],
})
export class UserCommentsComponent implements OnInit {
  @Input() comments: IComment[];

  tab = 0;

  constructor() {}

  ngOnInit(): void {}
}
