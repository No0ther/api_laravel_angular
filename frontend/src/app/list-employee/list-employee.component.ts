import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];
  editEmployee: Employee;
  

  constructor(
    private employeeService: EmployeesService,
    
    ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => (this.employees = employees))
  }

  delete(employee: Employee) {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee.id).subscribe();
  }

  edit (employee) {
    this.editEmployee = employee;
  }

  

}
