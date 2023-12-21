import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private headers = {
    'X-RapidAPI-Key': 'fffdd10405msha088a564a6518bap1acc05jsn27a6c9908b21',
    'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
  };

  constructor(private http: HttpClient) {}


  getFinanceNews(): Observable<any> {
    const url = 'https://ms-finance.p.rapidapi.com/news/list?performanceId=0P0000OQN8';

    return this.http.get<any>(url, { headers: this.headers }).pipe(
      catchError((error) => {
        console.error('Error fetching finance news:', error);
        return of([]);
      })
    );
  }

  getStocks(): Observable<any> {
    const url = 'https://ms-finance.p.rapidapi.com/market/get-global-indices';

    return this.http.get<any>(url, { headers: this.headers }).pipe(
      catchError((error) => {
        console.error('Error fetching stocks:', error);
        return of([]);
      })
    );
  }

}
