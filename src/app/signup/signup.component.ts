import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  //{{ }} => print variable from component to html -> one way
  //html --> component  ngModel 

  signup() {
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);  
  }
}
