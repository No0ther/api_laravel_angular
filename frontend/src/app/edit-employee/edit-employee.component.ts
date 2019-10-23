import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(employee => this.employee = employee);
  }

  save(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
}
