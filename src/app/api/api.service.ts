import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../models/book.model';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';



/* URL for api */
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<any> {
    const body = JSON.stringify(book);
    alert(book);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(API_URL + '/books', body, { headers }).pipe( catchError(this.handleError) );
  }

  getBooks(): Observable<Book[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Book[]>(API_URL + '/books', { headers }).pipe( catchError(this.handleError) );
  }

  getBookById(bookId: string): Observable<Book> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Book>(API_URL + '/books/' + bookId, { headers }).pipe( catchError(this.handleError) );
  }

  updateBook(book: Book): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(API_URL + '/books/' + book.bookId, { headers }).pipe( catchError(this.handleError) );
  }

  deleteBook(book: Book): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(API_URL + '/books/' + book.bookId, { headers }).pipe( catchError(this.handleError) );
  }

  // tslint:disable-next-line:typedef
  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

}
