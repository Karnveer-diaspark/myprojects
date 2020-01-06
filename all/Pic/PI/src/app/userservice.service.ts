import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:4000/user'

  createUser(user:User):Observable<any[]>{
    debugger    
    return this.http.post<any[]>(this.url + '/create', user)    
}   

loginUser(user:User):Observable<any[]>    
  {    
    debugger
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };    
    return this.http.post<any[]>(this.url + '/userlogin', user, httpOptions)    
  } 

  getAll():Observable<any[]>    
  {    
    debugger
    return this.http.get<any[]>(this.url + '/getAllUsers')    
  } 

  DeleteUser(Id:string):Observable<any[]>    
  {    
    debugger
    return this.http.delete<any>(this.url + '/delete/'+Id);    
  } 
}

