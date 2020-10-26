import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  autentication(res) {
    if (res.user == 'admin' && res.password == '12345678') {
      this.setLogin();
      return true
    } else {
      return false
    }
  }

  setLogin() {
    sessionStorage.setItem('authentication', JSON.stringify(true));
  }

  seltLogout() {
    sessionStorage.setItem('authentication', JSON.stringify(false));
  }

  getAutentication() {
    const isAuthenticated = sessionStorage.getItem('authentication');
    return JSON.parse(isAuthenticated);
  }

}
