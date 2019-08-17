import { Injectable } from '@angular/core';
import {Observable}from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Comment} from '../../app/classes/comment';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private http:HttpClient) { }
  postdata(opost:Comment):Observable<Comment>{
    return this.http.post<Comment>("./https://my-json-server.typicode.com/typicode/demo/posts/answers.json",opost);
  }
  private senduid =new Subject<any>();
  msg=this.senduid.asObservable();
   send(uid:any){
     this.senduid.next(uid);
   }
  
}
