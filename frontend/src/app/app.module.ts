import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
// import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { JarwisService } from './jarwis.service';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { NarvigatorComponent } from './narvigator/narvigator.component';
import { AfterLoginService } from './after-login.service';
import { BeforeLoginService } from './before-login.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    // DetailEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,
    SignupComponent,
    NarvigatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
