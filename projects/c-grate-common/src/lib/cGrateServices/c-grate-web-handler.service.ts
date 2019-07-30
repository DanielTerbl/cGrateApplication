import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IPerson } from '../cGrateModels/Interfaces/IPerson';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../cGrateModels/Common/app-error';
import { NotFoundError } from '../cGrateModels/Common/not-found-error';
import { NotAuthorized } from '../cGrateModels/Common/Not-Authorized';
@Injectable({
  providedIn: 'root'
})
export class CGrateWebHandlerService {

 

options= { headers: new HttpHeaders({'Content-Type':'application/json'})};;
  constructor(private url:string,private _http:HttpClient) { }

  
  private handleError(error: Response) {
    
    if(error.status==404)
    return Observable.throw(new NotFoundError());
    if(error.status==401)
    return Observable.throw(new NotAuthorized());
    return Observable.throw(new AppError(error));
}
  GetAll()
  {
    console.log("About to get some Employees");
      return this._http.get(this.url,this.options).pipe(
        tap(data => console.log('server data:', data)), 
        catchError(this.handleError));//Error Handling for our expected and un expected errors;
  }

  GetByID(appendUrl:string)
  {
    return this._http.get(this.url+"/"+appendUrl,this.options).pipe(
      tap(data => console.log('server data:', data)), 
      catchError(this.handleError));//Error Handling for our expected and un expected errors;
  }
  Post(resource)
  {
  return this._http.post(this.url,resource,this.options).pipe(
    tap(data => console.log('server data:', data)), 
    catchError(this.handleError));//Error Handling for our expected and un expected errors;  
  }

  Delete(id)
  {
    return this._http.delete(this.url+"/"+id).pipe(
      tap(data => console.log('server data:', data)), 
      catchError(this.handleError));//Error Handling for our expected and un expected errors
  }

  Update(resource,id)
  {
        return this._http.put(this.url+"/"+id,resource,this.options).pipe(
          tap(data => console.log('server data:', data)), 
          catchError(this.handleError));
  }
}
