import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {



  constructor() { }

  authenticate(username: string, password: string) {
    if (username === 'sudoRoot' && password === 'shubham') {
      sessionStorage.setItem('authenticatedUser', username)
      return true
    }
    return false;
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('authenticatedUser')
  }

}
