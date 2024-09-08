import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private baseUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0'; // URL de base de l'API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/users/login`;
    return this.http.post(url, { email, password });
  }

  // Autres méthodes...
}
