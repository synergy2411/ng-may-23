import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/model/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit, OnChanges {
  @Input('post') postId: string;

  @Output() onPostDeleteEvent = new EventEmitter();

  post: IPost;

  constructor(private postService: PostService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.postService
      .getPost(this.postId)
      .subscribe((data: IPost) => (this.post = data));
  }
  ngOnInit(): void {
    console.log('Selected Post : ', this.postId);
  }

  onPostDelete() {
    this.postService.deletePost(this.post.id).subscribe(() => {
      console.log('DELETED');
      this.onPostDeleteEvent.emit();
    });
  }

  onPostEdit() {
    this.postService.updatePost(this.post).subscribe(() => {
      console.log('UPDATED');
      this.onPostDeleteEvent.emit();
    });
  }
}
