import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api';
  }
  public getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/categories`);
  }
}
