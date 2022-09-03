import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  disable=false
  constructor(private userService: UserService, private toastr: ToastrService) {


  }
  users: Array<any> = []

  ngOnInit(): void {

    this.getAllUsers();

  }
  getAllUsers() {
    this.userService.getAllUserApi().subscribe(resp => {
      // console.log(resp.data);
      this.users = resp.data

    })
  }


  deleteUser(userId: any) {
    this.userService.deleteUserApi(userId).subscribe(resp => {
      this.toastr.success(resp.msg);


      this.users = this.users.filter(u => u.userId != userId)

      // for(let i=0;i<this.users.length;i++){
      //     if(this.users[i].userId == userId){

      //     }
      // }
      //this.getAllUsers()
    })
  }
  callme(){
      this.disable = true 
       
      setTimeout(()=>{
        this.disable  = false
      },5000)

  }
  
}


// init service ListUserComponent -> constructor -> ngOnInit -> html page load 
