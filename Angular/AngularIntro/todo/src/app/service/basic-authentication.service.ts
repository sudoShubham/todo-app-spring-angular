import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = "authenticatedUser"


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {



  constructor(private http: HttpClient) { }

  // authenticate(username: string, password: string) {
  //   if (username === 'sudoRoot' && password === 'shubham') {
  //     sessionStorage.setItem('authenticatedUser', username)
  //     return true
  //   }
  //   return false;
  // }


  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
  }



  excecuteBasicAuthenticationService(username: string, password: string) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    const headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    return this.http.get<any>(`${API_URL}/basicauth`, { headers: headers }).pipe(
      map(
        (data: any) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString)
          return data;
        }
      )
    );
  }




  // createBasicAuthenticationHttpHeader() {
  //   let username = "sudoRoot"
  //   let password = "shubham"
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
  //   return basicAuthHeaderString
  // }



  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token')

    return null;

  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }







}
