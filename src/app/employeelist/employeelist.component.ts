import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  employeeList:any;
  constructor(private employeeService: EmployeeService) {
    //this.employeeList = employeeService.getData();
    employeeService.getData().subscribe(data => this.employeeList = data)
  }

  ngOnInit() {
    console.log(this.employeeList);
  }

}
