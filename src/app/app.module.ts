import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule }  from "@angular/forms"
import { HttpClientModule} from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { HeaderComponent } from './user/header/header.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { LogoutComponent } from './logout/logout.component';
import { PipeDemoComponent } from './user/pipe-demo/pipe-demo.component';
import { UsdToInrPipe } from './usd-to-inr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    ListUserComponent,
    EditUserComponent,
    UserLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    LogoutComponent,
    PipeDemoComponent,
    UsdToInrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
