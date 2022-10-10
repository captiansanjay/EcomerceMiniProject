import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {
    console.log(user);

    return this._http.post<any>('http://localhost:8080/login', user)
  }
  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:8080/registeruser', user)
  }
  getProducts() {

    return this._http.get<any>("http://localhost:8080/findAllProd").pipe(map((res: any) => {
      return res;
      //https://fakestoreapi.com/products/
    }))
  }

  

}
