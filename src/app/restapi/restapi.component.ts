import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api/api.service';
import {Book} from '../models/book.model';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit {

  constructor(private api: ApiService) { }

  // tslint:disable-next-line:variable-name
  _books: Book[] = [];

  ngOnInit(): void {
    this.getBooks();
  }

  /* Get All Books */
  // tslint:disable-next-line:typedef
  getBooks() {
    this.api.getBooks().subscribe(
      (data) => { this._books = data; }
    );
  }

}
