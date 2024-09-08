import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerbService } from '../services/verb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private verbService: VerbService, private router: Router) {}

  onLogin() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    this.verbService.login(this.email, this.password).subscribe(
      (response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userName', response.logged_user.name);

          // Rediriger vers /conjugate et rafraîchir la page
          this.router.navigate(['/conjugate']).then(() => {
            window.location.reload(); // Rafraîchir la page
          });
        } else {
          alert('Erreur: réponse inattendue du serveur. Veuillez réessayer.');
        }
      },
      (error: any) => {
        console.error('Erreur de connexion:', error);
        if (error.status === 401) {
          alert('Email ou mot de passe incorrect.');
        } else {
          alert('Erreur de connexion. Veuillez réessayer plus tard.');
        }
      }
    );
  }
}
