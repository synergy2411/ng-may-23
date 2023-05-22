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

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService
      .getPostData()
      .subscribe((data) => (this.postCollection = data));
  }
}
