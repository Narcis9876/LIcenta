import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import {environment} from '../../environments/environment';

interface AuthResponseData{
  kind:string,
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered?:boolean

}

@Injectable({
  providedIn:'root'
})
export class AuthService{


  user= new BehaviorSubject<User>(null);
  constructor(private http:HttpClient ){}

  signUp(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseAPIKey,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(catchError(error=>{
      let errorMessage='A aparut o eroare necunoscuta';
      if(!error.error || !error.error.error){
        return throwError(errorMessage);
      }
      switch(error.error.error.message){
        case 'EMAIL_EXISTS':
        errorMessage="Exista un cont cu acest email"
      }
    error=errorMessage;
    return throwError(errorMessage);
    }),tap(respData=>{
      const expirationDate=new Date(new Date().getTime()+ +respData.expiresIn*1000);
      const user= new User(respData.email, respData.localId, respData.idToken,expirationDate );
      this.user.next(user);
      localStorage.setItem('userData', JSON.stringify(user));

    }))

  }

  login(email:string, password:string){

    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseAPIKey,
    {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(catchError(error=>{
      let errorMessage='A aparut o eroare necunoscuta';
      if(!error.error || !error.error.error){
        return throwError(errorMessage);
      }
      switch(error.error.error.message){
        case 'EMAIL_NOT_FOUND':
        errorMessage="Acest email nu exista";break;

        case 'INVALID_PASSWORD': errorMessage='Parola incorecta';
      }
    error=errorMessage;
    return throwError(errorMessage);
    }),
    tap(respData=>{
      const expirationDate=new Date(new Date().getTime()+ +respData.expiresIn*1000);
      const user= new User(respData.email, respData.localId, respData.idToken,expirationDate );
      this.user.next(user);
      localStorage.setItem('userData', JSON.stringify(user));

    })
    )
  }



  logout(){
    localStorage.clear();
    return this.user.next(null);
  }
  autoLogin(){
    const userData:{
      email:string,
      id:string,
      _token:string,
      _tokenExpirationDate:string

    }=JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }
const loadedUser= new User(userData.email, userData.id, userData._token,new Date(userData._tokenExpirationDate));

  if(loadedUser.token){
this.user.next(loadedUser);
  }
}
}
