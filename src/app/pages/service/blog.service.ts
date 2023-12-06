import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl : string = "https://jsonplaceholder.typicode.com/posts";

  constructor(
    private http: HttpClient
  ) { }

  getALLPost(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
