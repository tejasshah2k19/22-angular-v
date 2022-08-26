import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name = "royal"//instance 
  email: string = ""//instance 
  firstName: string = ""
  password: string = ""
  constructor(private sessionService: SessionService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  //{{ }} => print variable from component to html -> one way
  //html --> component  ngModel 

  signup() {
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    let user = { "firstName": this.firstName, "email": this.email, "password": this.password }
    this.sessionService.signupApi(user).subscribe(resp => {
      console.log(resp);
      this.toastr.success("User added....")
      this.router.navigateByUrl("/listuser")
    }, err => {
      console.log(err);

    })


  }
}
