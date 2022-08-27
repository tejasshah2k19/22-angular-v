import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor(private httpClient: HttpClient) {

  }

  //Observable 
  //Promise 
  signupApi(user: any): Observable<any> {
    return this.httpClient.post("https://healthy-me-rest-api.herokuapp.com/saveuser", user)
  }

}
