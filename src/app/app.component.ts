import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.isLoggedIn = !!localStorage.getItem('token'); // Vérifiez si le token est dans le localStorage
    this.userName = localStorage.getItem('userName') || ''; // Récupérer le nom de l'utilisateur
  }

  logout() {
    localStorage.removeItem('token'); // Supprimez le token
    localStorage.removeItem('userName'); // Supprimez le nom de l'utilisateur
    this.isLoggedIn = false;
    this.userName = '';
  }
}
