import { Injectable } from '@angular/core';
import {Observable}from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Comment} from '../../app/classes/comment';
@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private http:HttpClient) { }
  postdata(opost:Comment):Observable<Comment>{
    return this.http.post<Comment>("./https://my-json-server.typicode.com/typicode/demo/posts/answers.json",opost);
  }
  
}
