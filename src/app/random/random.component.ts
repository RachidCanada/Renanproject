// src/app/random/random.component.ts
import { Component } from '@angular/core';
import { VerbService } from '../services/verb.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html'
})
export class RandomComponent {
  randomVerbs: string[] = []; // Champ pour stocker les verbes aléatoires
  favoriteVerbs: string[] = []; // Champ pour stocker les verbes favoris

  constructor(private verbService: VerbService) {}

  // Méthode pour récupérer des verbes aléatoires
  getRandomVerbs() {
    console.log('Récupération des verbes aléatoires...');
    this.verbService.getRandomVerbs(5).subscribe(
      (response) => {
        if (response && response.verbs) {
          this.randomVerbs = response.verbs; // Assurez-vous que vous accédez à la propriété "verbs" de la réponse
          console.log('Verbes aléatoires récupérés:', this.randomVerbs);
        } else {
          console.log('Réponse inattendue:', response);
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des verbes aléatoires :', error);
        alert('Erreur lors de la récupération des verbes aléatoires. Veuillez réessayer plus tard.');
      }
    );
  }

  // Méthode pour ajouter les verbes aléatoires aux favoris
  addRandomVerbsToFavorites() {
    console.log('Ajout des verbes aléatoires aux favoris...');
    this.randomVerbs.forEach((verb) => {
      this.verbService.addFavorite(verb).subscribe(
        (response) => {
          this.favoriteVerbs.push(verb);
          console.log(`Verbe ajouté aux favoris : ${verb}`);
        },
        (error) => {
          console.error(`Erreur lors de l'ajout du verbe ${verb} aux favoris :`, error);
        }
      );
    });
  }
}
