import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name = "royal"
  email:string = "royal@gmail.com"
  constructor() { }

  ngOnInit(): void {
  }

}
