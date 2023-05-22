import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from 'src/model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:3000';

  getPostData(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.baseUrl}/posts`);
  }

  createPost(post: IPost) {
    return this.http.post(`${this.baseUrl}/posts`, post, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  constructor(private http: HttpClient) {}
}
