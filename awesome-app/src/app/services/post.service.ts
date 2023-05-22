import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IPost } from 'src/model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:3000';
  // postSubject = new Subject();

  getPostData(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.baseUrl}/posts`);
  }

  createPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(`${this.baseUrl}/posts`, post, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getPost(postId: string) {
    return this.http.get(`${this.baseUrl}/posts/${postId}`);
  }

  deletePost(postId: string) {
    return this.http.delete(`${this.baseUrl}/posts/${postId}`);
  }

  updatePost(post: IPost) {
    return this.http.patch(`${this.baseUrl}/posts/${post.id}`, post);
  }

  constructor(private http: HttpClient) {}
}
