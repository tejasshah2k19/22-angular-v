import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: Array<any> = []

  ngOnInit(): void {

    this.userService.getAllUserApi().subscribe(resp => {
        // console.log(resp.data);
        this.users = resp.data 
        
    })
  }

}
