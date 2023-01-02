import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private ds:DataService,private fb:FormBuilder,private router: Router){

  }
  acno:any
  pswd:any

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  logIn() {
    var acno =this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;
    var userDetails = this.ds.userDetails;
    

    const result = this.ds.login(acno,pswd)
    if(this.loginForm.valid){
      if (result) {
        this.router.navigateByUrl('user')
  
      }
    }
     
  }
  

}
