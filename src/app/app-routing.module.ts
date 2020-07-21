import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'employees', component:EmployeelistComponent},
  {path:'details/:id', component:EmployeeDetailComponent},
  {path:'about', component:AboutusComponent},
  {path:'lazy', loadChildren:'./lazy/lazy.module#LazyModule'},
  { path: '',   redirectTo: '/employees', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
