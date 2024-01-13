import { Injectable, computed, inject, signal } from '@angular/core';
import { ReqResponse, User, UserResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

  interface State {
  users: User[];
  loading:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl:string='https://reqres.in/api/users'
private state=signal<State>({
  users: [],
  loading: true
})
public  users=computed(()=>this.state().users);
private http=inject(HttpClient)
  constructor() { 

    this.http.get<ReqResponse>(this.apiUrl).subscribe(res=>{
      this.state.set({
        users:res.data,
        loading:false
      })
    })
  }
  getUserById(id:number){
    return this.http.get<UserResponse>(`${this.apiUrl}/${id}`)
    .pipe(map(res=>res.data))
  }
}
