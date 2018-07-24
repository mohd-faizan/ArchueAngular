import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Myresp } from './restype/myresp';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  convertFormData(data){
  	var fd = new FormData();
  	for(let i in data){
  		fd.append(i,data[i]);
  	}
  	return fd;
  }
  login(data):Observable<Myresp>{
  	var formData = this.convertFormData(data);
  	return this.http.post<Myresp>("php/login.php",formData);
  }
}
