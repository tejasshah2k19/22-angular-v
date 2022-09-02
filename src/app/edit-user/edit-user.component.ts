import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute, private userService: UserService) { }
  userId = ""
  firstName = ""

  ngOnInit(): void {
    this.userId = this.aRoute.snapshot.params['userId']
    this.userService.getUserByIdApi(this.userId).subscribe(resp => {
      this.firstName = resp.data.firstName; //
    })
  }

  update() {
    let user = { "userId": this.userId, "firstName": this.firstName }
    
    this.userService.updateUser(user).subscribe(resp => {

    },err=>{
      alert("MEN AT WORK")
    })
  }

}
