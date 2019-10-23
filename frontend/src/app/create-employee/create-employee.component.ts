import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  employees: Employee[];
  editEmployee: Employee;
  todoListForm: FormGroup;
  employee = new Employee();
  formError = {
    name: '',
    email: '',
    address: '',
    phone: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private employeeService: EmployeesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.todoListForm = this.formBuilder.group({
      name: [this.employee.name, [Validators.required]],
      email: [this.employee.email, [Validators.required]],
      address: [this.employee.address, [Validators.required]],
      phone: [this.employee.phone, [Validators.required, Validators.pattern(/^[0-9]\d{9}$/)]]
    });

    this.todoListForm.value;
    Object.keys(this.formError).forEach(key => {
      if (this.todoListForm.get(key) && this.todoListForm.get(key).errors) {
        this.formError[key] = this.todoListForm.get(key).errors;
      } else {
        this.formError[key] = '';
      }
    });
    if (this.checkError()) {
      console.log(this.todoListForm.value);
      this.editEmployee = undefined;
      const newEmployee: Employee =  this.todoListForm.value  as Employee;
      this.employeeService.addEmployee(newEmployee).subscribe();
      this.router.navigate(['/employees']);
    }
  }

  checkError() {
    for (const key in this.formError) {
      if (this.formError[key] !== '') {
        return false;
      }
    }
    return true;
  }



}
