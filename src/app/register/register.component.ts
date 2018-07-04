import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={};
  result :any;
  constructor(private sevice:LoginserviceService,
  private router:Router ) { }

  ngOnInit() {
  }
  registerfun(model){
    debugger;
    
    this.sevice.addreg(model).subscribe(res=>{
      this.result = res.json();
      console.log(this.result);
      this.router.navigate([''])
    })
   
  }

}
