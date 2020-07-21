import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // private employeeList:any = [
  //   {name:"John",age:35,Deparment:'A',id:1244},
  //   {name:"Jason",age:45,Deparment:'A',id:1235},
  //   {name:"Lily",age:30,Deparment:'C',id:1104},
  //   {name:"Jack",age:32,Deparment:'B',id:1184}
  // ];

  _url:string = '/assets/data/data.json'
  constructor(private http:HttpClient) {

  }

  getData(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url);
    //return this.employeeList;
  }
}
