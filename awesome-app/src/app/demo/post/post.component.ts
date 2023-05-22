import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postCollection: IPost[];
  toggle: boolean = false;
  postItemToggle: boolean = false;
  selectedPostId: string;

  constructor(private postService: PostService) {}

  private getData() {
    this.postService
      .getPostData()
      .subscribe((data) => (this.postCollection = data));
  }

  ngOnInit(): void {
    this.getData();
  }

  onPostSuccess() {
    this.toggle = false;
    this.getData();
  }

  onPostSelect(postId: string) {
    console.log(postId);
    this.postItemToggle = true;
    this.selectedPostId = postId;
  }
}
