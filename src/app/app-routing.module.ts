import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginCheckGuard } from './login-check.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

const routes: Routes = [

  { component: LoginComponent, path: "login" },
  { path: "signup", component: SignupComponent },
  { path: "", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  {
    path: "user", component: UserLayoutComponent, children: [
      { path: "listuser", component: ListUserComponent },
      { path: "edituser/:userId", component: EditUserComponent },

    ], canActivate: [LoginCheckGuard]
  },

  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//login123 
