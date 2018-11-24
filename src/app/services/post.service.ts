import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getList(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${environment.apiUrl}posts`);
  }
  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}posts/${id}`);
  }
}
