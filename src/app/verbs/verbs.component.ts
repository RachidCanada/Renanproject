import { Component } from '@angular/core';
import { VerbService } from '../services/verb.service';

@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.css']
})
export class VerbsComponent {
  verb: string = ''; // Verbe à rechercher
  verbDetails: any = null; // Détails du verbe
  message: string = ''; // Message d'erreur ou de succès

  constructor(private verbService: VerbService) {}

  // Méthode pour récupérer les détails du verbe
  getVerbDetails() {
    if (this.verb.trim()) {
      this.verbService.getVerb(this.verb).subscribe(
        (response) => {
          if (response) {
            this.verbDetails = response;
            this.message = `Détails du verbe "${this.verb}" récupérés avec succès.`;
          } else {
            this.message = `Aucun détail trouvé pour le verbe "${this.verb}".`;
          }
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails du verbe:', error);
          this.message = 'Erreur lors de la récupération des détails du verbe. Veuillez réessayer.';
        }
      );
    } else {
      this.message = 'Veuillez entrer un verbe valide.';
    }
  }
}
