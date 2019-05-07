import { Injectable } from '@angular/core';
import { Avengers } from 'src/app/models/avengers';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = 'https://localhost:44338/api/Avengers/Pegar';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private _httpClient: HttpClient
  ) { }

  // Método de GET ALL
  getAvengers(): Observable<Avengers[]> {
    return this._httpClient.get<Avengers[]>(apiUrl)
      .pipe(
        tap(vengers => console.log('leu os Avengers')),
        catchError(this.handleError('getAvengers', []))
      );
  }

  // Método de DELETE ALL
  deleteAvengers(): Observable<boolean> {
    return this._httpClient.delete<boolean>(apiUrl, httpOptions)
      .pipe(
        tap(_ => console.log(`remove todos os Avengers`)),
        catchError(this.handleError<boolean>('removeAvengers'))
    );
  }

  // Método que exibi os erros 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
