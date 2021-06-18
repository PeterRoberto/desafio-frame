import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Postagens } from '../models/postagens';
import { Todos } from '../models/todos'; 
import { Albums } from '../models/albums'; 
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  url = 'https://jsonplaceholder.typicode.com/';
  posts = 'posts/';
  albums = 'albums/';
  todos = 'todos/';

  constructor(private http: HttpClient) { }


  // API erros
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Se ocorrer um erro no client-side ou com a internet
      console.error('An error occurred:', error.error.message);
    } else {
      // O backend não retornou os dados com sucesso
      console.error(
        `Backend retornou ${error.status}, ` +
        `Mensagem de erro: ${error.error}`);
    }
    // Retorna o observable com a mensagem de erro
    return throwError(
      'Algo de errado acontececu, tente novamente mais tarde');
  };

  
  // Pegar as postagens
  getPostagens(): Observable<Postagens> {
    return this.http
      .get<Postagens>(this.url + this.posts) 
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  // Pegar os Todos
  getTodos(): Observable<Todos> {
    return this.http
      .get<Todos>(this.url + this.todos) 
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


   // Pegar os Albums
   getAlbums(): Observable<Albums> {
    return this.http
      .get<Albums>(this.url + this.albums) 
      .pipe(
        retry(1), 
        catchError(this.handleError)
      )
  }
  
}
