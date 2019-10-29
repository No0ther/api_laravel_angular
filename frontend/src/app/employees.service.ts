import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Employee } from '../model/employee';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  //private handleError:

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private tokenService: TokenService 
  ) { }

  getEmployees(): Observable<Employee[]> {
    const TOKEN = this.tokenService.get();
    const header = { "Authorization": "bearer "+TOKEN};
    return this.http
      .get<Employee[]>('api/employees',  {headers: header})
      .pipe(catchError(this.handleError('getEmployee', [])))
  }

  getEmployee(id: number): Observable<Employee> {
    const TOKEN = this.tokenService.get();
    const header = { "Authorization": "bearer "+TOKEN};
    console.log(header);
    return this.http
      .get<Employee>(`api/employees/${id}`, {headers: header})
      .pipe(catchError(this.handleError<Employee>(`getEmployee id = ${id}`)))
  }


  addEmployee(employee: Employee): Observable<Employee> {
    const TOKEN = this.tokenService.get();
    const header = { "Authorization": "bearer "+TOKEN};
    return this.http
      .post<Employee>('api/employees', employee,  {headers: header})
      .pipe(catchError(this.handleError('addEmployee', employee)));
  }

  deleteEmployee(id: number): Observable<{}> {
    const url = `api/employees/${id}`;
    return this.http
      .delete(url)
      .pipe(catchError(this.handleError('deleteEmployee')));
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http
      .put<Employee>(`api/employees/${employee.id}`, employee)
      .pipe(catchError(this.handleError('updateEmployee', employee)));
      
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      this.log(`${operation} failed: ${error.message}`);


      return of(result as T)
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
