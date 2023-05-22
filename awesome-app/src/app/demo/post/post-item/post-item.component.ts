import {
  Component,
  Input,
  OnChanges,
  OnInit,
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
}
