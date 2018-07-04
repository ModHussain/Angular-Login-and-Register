import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginserviceService]
})
export class LoginComponent implements OnInit { 
  model: any = {};
  loading = false;
  details:any={}; 
  constructor(private router:Router,
              private loginservice:LoginserviceService) { }
  loginfun(){
    debugger;
    this.loading = true;
    const userdetails='email='+this.model.email+'&password='+this.model.password;
    this.loginservice.login(userdetails).subscribe(res=>{
      debugger;
    this.details = res.json();
    console.log(this.details);
        
    if(this.details =="Username not found")
    {     
      alert(this.details);
    }
    else if(this.details=="Incorrectusername password"){
      alert(this.details);
    }
    else
    {
      this.router.navigateByUrl('dashboard'); 
    }
    
    })     
  }
  
  ngOnInit() {
  }
}