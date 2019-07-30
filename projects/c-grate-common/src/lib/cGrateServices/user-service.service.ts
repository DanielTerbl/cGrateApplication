import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CGrateWebHandlerService } from './c-grate-web-handler.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends CGrateWebHandlerService{
options= { headers: new HttpHeaders({'Content-Type':'application/json'})};

  constructor(_http:HttpClient)
   { super("localhost.fakeBackend.com/employees",_http);}


}
