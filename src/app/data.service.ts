import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any={
    "taz@gmail.com":{accno:10,username:"Taz",password:1,phonenumber:1234569870},
    "vic@gmail.com":{accno:1001,username:"vic",password:1001,phonenumber:1234569870},
    "lisa@gmail.com":{accno:1002,username:"lisa",password:1002,phonenumber:1234569870},
    "gtr@gmail.com":{accno:1003,username:"gtr",password:1003,phonenumber:1234569870}
   }

  constructor() { 
    this.getDetails()

  }

  currentUser:any
  currentAcno:any


  saveDetails(){
    if(this.userDetails){
     localStorage.setItem('Database',JSON.stringify(this.userDetails))
    }
    if(this.userDetails){
     localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
    }
    if(this.userDetails){
     localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
    }
 }
 getDetails(){
  if(localStorage.getItem('Database')){
    this.userDetails=JSON.parse(localStorage.getItem('Database') ||'')
   }
   if(localStorage.getItem('currentUser')){
    this.currentUser=JSON.parse(localStorage.getItem('currentUser') ||'')
   }     
   if(localStorage.getItem('currentAcno')){
    this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') ||'')
   }
  }



  login(acno:any,password:any){
    console.log(this.userDetails);
    
    if(acno in this.userDetails){
        if(password==this.userDetails[acno].password){
          this.currentUser=this.userDetails[acno].username
          this.currentAcno=acno
          this.saveDetails()
          return true
        }else{
          alert('Invalid Password')
          return false
        }
    }else{
      alert("Invalid  Username")
      return false
    }
  }

  register(acno:any,username:any,password:any,phonenumber:any){
    if(acno in this.userDetails){
      return false
    }else{
      this.userDetails[acno]={
        acno:acno,
        username:username,
        password:password,
        phonenumber:phonenumber
        
        
      }
      this.saveDetails()

      return true
    }
  }
}
