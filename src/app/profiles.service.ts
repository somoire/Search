import { Injectable } from '@angular/core';
// import { HttpClient, Headers } from '@angular/common/HttpClient';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private username:string;


  constructor(private http:HttpClient) {
    console.log("service is now ready!")
    this.username = 'somoire';
   }

  getProfileInfo(){
    return this.http.get(environment.apiUrl+"users/" + this.username +"?access_token="+environment.access_token).pipe(map(result=>result));
     }
}
