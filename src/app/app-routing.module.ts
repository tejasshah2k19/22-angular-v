import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { component: LoginComponent, path: "login" },
  {path: "signup", component: SignupComponent },
  {path:"",component:LoginComponent},
  {path:"listuser",component:ListUserComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//login123 
