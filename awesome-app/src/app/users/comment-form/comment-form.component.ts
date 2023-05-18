import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent {
  onAddComment(form: NgForm) {
    console.log(form);
  }
}
