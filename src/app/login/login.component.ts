import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginMode=true;
  error:string=null;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

onSwitchMode(){
  this.isLoginMode=!this.isLoginMode;
}

onSubmit(form: NgForm){

  if(!form.valid){
    return;
  }
 const email=form.value.email;
 const password=form.value.password;

 if(this.isLoginMode){
  this.authService.login(email,password).subscribe(respData=>{
    this.router.navigate(['/home']);
    console.log(respData)
  }, error=>{

this.error=error
    console.log(error);
  });
}
else{
  this.authService.signUp(email,password).subscribe(respData=>{
    this.router.navigate(['/home']);
    console.log(respData)
  }, error=>{

this.error=error
    console.log(error);
  });
}

form.reset();
}

autoLog(){
  this.authService.autoLogin();
}
}
