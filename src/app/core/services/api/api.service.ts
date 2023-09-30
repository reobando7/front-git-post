import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = environment.URL;

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
