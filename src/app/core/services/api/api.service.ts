import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  handleError(error : HttpErrorResponse){
    console.log(error)
  }

  get(path : string){
    return this.http.get(`${this.url}${path}`);
  }

  post(path : string, data:any){
    return this.http.post(`${this.url}${path}`, data);
  }
}
