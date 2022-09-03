import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private toastr:ToastrService,private router:Router,private userData:UserDataService) { }

  ngOnInit(): void {
    this.userData.authToken = ""
    this.toastr.success("Logout Done")
    this.router.navigateByUrl("/login")
  }

}
