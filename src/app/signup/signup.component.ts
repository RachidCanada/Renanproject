import { Component } from '@angular/core';
import { VerbService } from '../services/verb.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  email: string = '';
  name: string = '';
  password: string = '';
  successMessage: string = ''; // Ajoutez cette ligne
  errorMessage: string = ''; // Ajoutez cette ligne

  constructor(private verbService: VerbService) {}

  onSignup() {
    this.verbService.signup(this.email, this.name, this.password).subscribe(
      (response: any) => {
        this.successMessage = 'Inscription réussie!'; // Définissez le message de succès ici
        this.errorMessage = ''; // Réinitialisez le message d'erreur
        console.log('Inscription réussie:', response);
      },
      (error: any) => {
        this.errorMessage = 'Erreur lors de l\'inscription : ' + error.message; // Définissez le message d'erreur
        this.successMessage = ''; // Réinitialisez le message de succès
        console.error('Erreur lors de l\'inscription:', error);
      }
    );
  }
}
