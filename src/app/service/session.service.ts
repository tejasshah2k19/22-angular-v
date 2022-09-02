import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor(private httpClient: HttpClient) {

  }

  //Observable 
  //Promise 
  signupApi(user: any): Observable<any> {
    return this.httpClient.post(environment.uri+"/saveuser", user)
  }

  loginApi(user:any):Observable<any>{
    return this.httpClient.post(environment.uri+"/authenticate",user)
  }
}
