import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  cognitoUser: any;

  constructor() { }

  register(email, password) {
    const atttibuteList = [];

    return new Observable<any>(observer => {
      if (email !== 'mm@gmail.com' || password !== 'mypass'){
        console.log('signUp error');
        observer.error('Bad credential');
      } else {
        this.cognitoUser = {name: 'Doum'};
        observer.next(this.cognitoUser);
        observer.complete();
      }
    });
  }

  signIn(email, password) {
    return new Observable<any>(observer => {
      if (email !== 'mm@gmail.com' || password !== 'mypass'){
        console.log('signUp error');
        observer.error('Bad credential');
      } else {
        this.cognitoUser = {name: 'Doum'};
        console.log('signUp success', this.cognitoUser);
        observer.next(this.cognitoUser);
        observer.complete();
      }
    });
  }

  isLoggedIn() {
    return this.cognitoUser != null;
  }

  confirmAuthCode(code) {
    return new Observable<any>(observer => {
      if (code !== 'abcd') {
        console.log('Bad code');
        observer.error('Bad validation code');
      } else {
        console.log('confirmAuthCode() success');
        observer.next('Confirm code OK');
        observer.complete();
      }
    });
  }

  getAuthentificatedUser() {
    return {"name":"Doum", "prenom":"mbengue"};
  }

  logOut() {
    this.cognitoUser = null;
  }

}
