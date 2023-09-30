import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private apiService : ApiService) { }

  getPost(){
    return this.apiService.get('/v1/posts');
  }
}
