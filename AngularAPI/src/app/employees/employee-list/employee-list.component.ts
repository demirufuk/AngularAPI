import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
import { Employee } from "src/app/shared/employee.model";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  constructor(private service: EmployeeService) {}

  list: Employee[];

  ngOnInit() {
    this.service.employeeList().subscribe(data => {
      this.list = data;
    });
  }

  populateForm(list: Employee) {
    this.service.formData = Object.assign({}, list);
  }

  onDelete(id: number) {
    if (confirm("Silmek istediğinie emin misin?")) {
      this.service.deleteEmployee(id).subscribe(data => {
        this.service.employeeList().subscribe(data=>{
          this.list = data;
        });
      });
    }
  }

}
