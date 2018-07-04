import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { ServicesComponent } from './services/services.component';


import { ChildServiceComponent } from './child-service/child-service.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[{path:'chil-service',component:ChildServiceComponent}]
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
