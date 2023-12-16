import { Post } from './../post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Photos } from '../photos';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  photoUrl: string = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http: HttpClient) {}

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError((error) => {
        // Handle error and return a new observable
        console.error(error);
        return of([] as Post[]); // Alternatively, you could throw the error again
      })
    );
  }

  getPhotos(): Observable<Photos[]>{
    return this.http.get<Photos[]>(this.photoUrl).pipe(
      catchError((error) => {
        // Handle error and return a new observable
        console.error(error);
        return of([]); // Alternatively, you could throw the error again
      })
    )
  }
}
