import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api';
  }
  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }
  public findUserById(id: string | undefined): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }
}
