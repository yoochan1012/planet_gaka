import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CommentsService {
  private getUrl = "http://localhost:5000/api/comments";
  private addUrl = "http://localhost:5000/api/comment";
  private deleteUrl = "http://localhost:5000/api/comment";

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.getUrl);
  }

  addComment(newComment): Observable<Comment> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Comment>(this.addUrl, newComment, {headers: headers});
  }
  
  deleteComment(id): Observable<Comment> {
    return this.http.delete<Comment>(this.deleteUrl + id);
  }
}