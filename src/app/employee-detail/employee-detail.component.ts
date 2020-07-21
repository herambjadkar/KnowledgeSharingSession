import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employee:any;
  employeeList:any;
  constructor(private route : ActivatedRoute, private employeeService:EmployeeService ){
    employeeService.getData().subscribe(data => {
      this.employeeList = data;
      this.route.params.subscribe(params => {
        console.log(params);
        this.employee = this.employeeList.filter((item) => item.id == parseInt(params.id))[0];
        //console.log(this.employee);
      });
    });

  }

  ngOnInit() {

  }

}
