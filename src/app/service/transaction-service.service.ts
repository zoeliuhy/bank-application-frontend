import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../interface/transaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api';
  }
  public findAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.url}/transactions`);
  }
  public save(transaction: Transaction) {
    return this.http.post<Transaction>(`${this.url}/transactions`, transaction);
  }
  public findById(id: string | undefined): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.url}/transactions/${id}`);
  }
  public findAllByAccountId(id: string | undefined): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `${this.url}/accounts/${id}/transactions`
    );
  }
}
