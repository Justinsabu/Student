import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  reg_name:any
  reg_pswd:any
  reg_acno:any
 
  constructor (private ds:DataService,private router:Router,private fb:FormBuilder) {}


  registerForm=this.fb.group({
    reg_name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    reg_acno:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    reg_pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  register(){
    var acno=this.registerForm.value.reg_acno
    var pswd=this.registerForm.value.reg_pswd
    var name=this.registerForm.value.reg_name
    var ph=this.registerForm.value.phone
     // var userDetails=this.ds.userDetails
   
 
    const result=this.ds.register(acno,name,pswd,ph)
 
    if(this.registerForm.valid){
     if(result){
       alert("register successful")
       this.router.navigateByUrl('')
 
     }else{
       alert('register failed')
       console.log(this.registerForm.get('reg_name')?.errors);
       
     }
    }
 
    
 
 
    
   }
 

  

}
