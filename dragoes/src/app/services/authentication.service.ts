import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  autenticacao(res) {
    if (res.usuario == 'admin' && res.senha == '12345678') {
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

  getAutenticacao() {
    const isAuthenticated = sessionStorage.getItem('authentication');
    return JSON.parse(isAuthenticated);
  }

}
