import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AfterLoginService } from './after-login.service';
import { BeforeLoginService } from './before-login.service';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'employee/:id', component: EditEmployeeComponent, canActivate: [AfterLoginService]},
  { path: 'create', component: CreateEmployeeComponent, canActivate: [AfterLoginService]},
  { path: 'employees' , component: ListEmployeeComponent, canActivate: [AfterLoginService]},
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]},
  { path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
