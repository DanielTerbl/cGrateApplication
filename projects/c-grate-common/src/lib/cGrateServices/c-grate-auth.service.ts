import { Injectable } from '@angular/core';
import { CGrateWebHandlerService } from './c-grate-web-handler.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CGrateAuthService extends CGrateWebHandlerService{

  constructor(_http:HttpClient)//Controller used for Authorisation
  { super("localhost.fakeBackend.com/auth",_http);}


isLoggedIn()
{
  console.log("Checking if user is logged in");
//Actually have to check JWT token if expired, but dont want to work with the tokens in the Demo
if(localStorage.getItem("loggedInUser")!=null)return true;
return false;
}

Logout()//Destroy user Data
{
  localStorage.clear();
}

}
