import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllUserApi():Observable<any>{
    return this.httpClient.get(environment.uri+"/users")
  }
  deleteUserApi(userId:any):Observable<any>{
    return this.httpClient.delete(environment.uri+"/users/"+userId)
  }
  getUserByIdApi(userId:any):Observable<any>{
    return this.httpClient.get(environment.uri+"/users/"+userId)
  }
  //saveuser like update 
  updateUser(user:any):Observable<any>{
    return this.httpClient.put("",user)
  }

}
