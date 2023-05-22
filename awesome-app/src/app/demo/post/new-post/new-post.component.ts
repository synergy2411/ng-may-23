import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  post: {
    title: string;
    body: string;
  } = { title: '', body: '' };

  @Output() onPostSuccess = new EventEmitter();

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onAddPost() {
    this.postService.createPost(this.post).subscribe((data) => {
      console.log('[POST SUCCESS]', data);
      this.onPostSuccess.emit();
    });
  }
}
