import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators/catchError';
import { _throw } from 'rxjs/observable/throw';
import * as toastr from 'toastr';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  get(url: string, options: any = {}): Promise<any> {
    return this.http
      .get(url)
      .pipe(
        catchError(
          error => _throw(this.popToast('Ops, tivemos um erro inesperado, tente mais tarde =)'))
        )
      )
      .toPromise();
  }

  post(url: string, data: any, options: any = {}) {
    return this.http.post(url, data)
      .pipe(
        catchError(
          error => _throw(this.popToast('Ops, tivemos um erro inesperado, tente mais tarde =)'))
        )
      )
      .toPromise();
  }

  put(url: string, data: any, options: any = {}) {
    return this.http.put(url, data)
      .pipe(
        catchError(
          error => _throw(this.popToast('Ops, tivemos um erro inesperado, tente mais tarde =)'))
        )
      )
      .toPromise();
  }


  delete(url: string, options: any = {}): Promise<any> {
    return this.http
      .delete(url)
      .pipe(
        catchError(
          error => _throw(this.popToast('Ops, tivemos um erro inesperado, tente mais tarde =)'))
        )
      )
      .toPromise();
  }

  popToast(message) {
    toastr.error(message, 'Erro!');
  }
}
