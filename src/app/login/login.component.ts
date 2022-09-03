import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service/session.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = ""
  password:string = ""

  constructor(private sessionService:SessionService,private toaster:ToastrService,private router:Router,private userData:UserDataService) { }
  
  ngOnInit(): void {
  }


  login(){
      let user = {"email":this.email,"password":this.password}
      this.sessionService.loginApi(user).subscribe(resp=>{
          if(resp.status == -1){
            this.toaster.error(resp.msg);
          }else{
             this.userData.authToken = resp.data.authToken 
             console.log(this.userData.authToken);
              
            this.toaster.success(resp.msg);
            //go to list page 
            this.router.navigateByUrl("/user/listuser")

          }
      })
    }
}
