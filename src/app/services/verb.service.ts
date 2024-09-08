import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerbService {
  private baseUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0'; // Base URL de l'API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les en-têtes HTTP avec le token JWT
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';  // Récupère dynamiquement le token depuis localStorage
    return new HttpHeaders({ 
      'Content-Type': 'application/json',
      'x-access-token': token
    });
  }

  // Méthode pour l'inscription
  signup(email: string, name: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/users/signup`;
    const body = { email, name, password };
    return this.http.post<any>(url, body, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (signup):', response)),
        catchError(this.handleError)
      );
  }

  // Gestion des erreurs
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Erreur inconnue';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur côté client: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      const errorDetail = error.error?.message || error.message || 'Erreur inconnue';
      errorMessage = `Code d'erreur: ${error.status}\nMessage: ${errorDetail}`;
    }
    console.error('Erreur API: ', errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  // Méthode pour se connecter
  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/users/login`;
    return this.http.post<any>(url, { email, password }, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (login):', response)),
        catchError(this.handleError)
      );
  }

  // Méthode pour récupérer un verbe spécifique
  getVerb(verb: string): Observable<any> {
    const url = `${this.baseUrl}/verbs/`;
    const body = { verb }; 
    return this.http.post<any>(url, body, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (getVerb):', response)),
        catchError(this.handleError)
      );
  }

  // Méthode pour obtenir des verbes aléatoires
  getRandomVerbs(quantity: number): Observable<any> {
    const url = `${this.baseUrl}/verbs/random`;
    const body = { quantity };
    return this.http.post<any>(url, body, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (getRandomVerbs):', response)),
        catchError(this.handleError)
      );
  }

  // Méthode pour ajouter un verbe aux favoris
  addFavorite(verb: string): Observable<any> {
    const url = `${this.baseUrl}/verbs/favorites`;
    const body = { verb };
    return this.http.post<any>(url, body, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (addFavorite):', response)),
        catchError(this.handleError)
      );
  }

  // Méthode pour obtenir un favori spécifique
  getFavorite(id: string): Observable<any> {
    const url = `${this.baseUrl}/verbs/favorites/${id}`;
    return this.http.get<any>(url, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (getFavorite):', response)),
        catchError(this.handleError)
      );
  }

  // Méthode pour obtenir tous les favoris
  getAllFavorites(): Observable<any> {
    const url = `${this.baseUrl}/verbs/favorites/all`;
    return this.http.get<any>(url, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (getAllFavorites):', response)),
        catchError(this.handleError)
      );
  }

  // Méthode pour supprimer un favori
  deleteFavorite(id: string): Observable<any> {
    const url = `${this.baseUrl}/verbs/favorites/${id}`;
    return this.http.delete<any>(url, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (deleteFavorite):', response)),
        catchError(this.handleError)
      );
  }

  // Méthode pour conjuguer un verbe
  conjugateVerb(verb: string): Observable<any> {
    const url = `${this.baseUrl}/verbs/conjugate`;
    const body = { verb };
    return this.http.post<any>(url, body, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (conjugateVerb):', response)),
        catchError(this.handleError)
      );
  }

  // Méthode pour obtenir les détails d'un verbe
  getVerbDetails(verb: string): Observable<any> {
    const url = `${this.baseUrl}/verbs/details`;
    const body = { verb };
    return this.http.post<any>(url, body, { headers: this.getHeaders() })
      .pipe(
        tap(response => console.log('Réponse du serveur (getVerbDetails):', response)),
        catchError(this.handleError)
      );
  }
}
