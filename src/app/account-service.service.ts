import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api';
  }
  public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.url}/accounts`);
  }
  public save(account: Account) {
    return this.http.post<Account>(`${this.url}/accounts`, account);
  }
  public findById(id: string | undefined): Observable<Account> {
    return this.http.get<Account>(`${this.url}/accounts/${id}`);
  }
}
