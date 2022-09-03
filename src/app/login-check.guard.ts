import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckGuard implements CanActivate {

  constructor(private userData: UserDataService, private router: Router, private toastr: ToastrService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.userData.authToken == null || this.userData.authToken == "") {
      this.toastr.error("Please Login Before Access SErvice")
      this.router.navigateByUrl("/login")
      return false
    } else {
      console.log("LoginChecGuard");
      return true;//go ahead 
    }
  }

}
