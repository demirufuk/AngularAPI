import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  formData: Employee;
  readonly rootURL = "http://localhost:61346/api";

  constructor(private http:HttpClient) {}

  postEmployee(formData:Employee){
    return this.http.post(this.rootURL + '/Employees',formData);
  }

  putEmployee(formData:Employee){
    return this.http.put(this.rootURL + '/Employees/' + formData.EmployeeID,formData);
  }

  // employeeList():Observable<Employee[]>{
  //   return this.http.get<Employee[]>(this.rootURL + "/Employees")
  // }

  employeeList():Observable<Employee[]>{
    return this.http
    .get<Employee[]>(this.rootURL + "/Employees");
  }

  deleteEmployee(id:number){
    return this.http.delete(this.rootURL + '/Employees/' + id);
  }

}
