import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IComment } from 'src/model/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent {
  @Output() onCloseForm = new EventEmitter();
  @Output() onNewComment = new EventEmitter<IComment>();

  onAddComment(form: NgForm) {
    let newComment: IComment = { ...form.value };
    this.onNewComment.emit(newComment);
  }

  onClose() {
    this.onCloseForm.emit();
  }
}
