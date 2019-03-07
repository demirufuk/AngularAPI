import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  constructor(private service: EmployeeService,
    private toastr:ToastrService) {}

    list:Employee[];

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      EmployeeID: null,
      FullName: '',
      Position: '',
      EMPCode: '',
      Mobile: ''
    };
  }

  onSubmit(form: NgForm) {
    if(form.value.EmployeeID == null)
    this.insertRecord(form);
    else{
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.employeeList().subscribe(data=>{
        this.list = data;
        alert("asda")
      });
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res =>{
      this.resetForm(form);
      this.service.employeeList().subscribe(data=>{
        this.list = data;
      });
    });
  }

}
