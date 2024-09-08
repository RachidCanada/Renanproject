import { Component } from '@angular/core';
import { VerbService } from '../services/verb.service';

@Component({
  selector: 'app-conjugation',
  templateUrl: './conjugation.component.html',
  styleUrls: ['./conjugation.component.css']
})
export class ConjugationComponent {
  verb: string = '';
  conjugation: any;

  constructor(private verbService: VerbService) {}

  getConjugation() {
    if (this.verb.trim()) {
      this.verbService.getVerb(this.verb).subscribe(
        (response) => {
          this.conjugation = response;
        },
        (error) => {
          console.error('Erreur lors de la récupération de la conjugaison :', error);
          alert('Erreur lors de la récupération de la conjugaison. Veuillez vérifier le verbe ou réessayer plus tard.');
        }
      );
    } else {
      alert('Veuillez entrer un verbe.');
    }
  }

  getModes(): string[] {
    return Object.keys(this.conjugation.verb).filter(key => typeof this.conjugation.verb[key] === 'object');
  }

  getTemps(mode: string): string[] {
    return Object.keys(this.conjugation.verb[mode]);
  }

  getPersonnes(mode: string, temps: string): string[] {
    return Object.keys(this.conjugation.verb[mode][temps]);
  }

  getPersonneLabel(personne: string): string {
    const labels: { [key: string]: string } = {
      'indicatifPresentI': 'Je',
      'indicatifPresentYou': 'Tu',
      'indicatifPresentHeSheIt': 'Il/Elle/On',
      'indicatifPresentWe': 'Nous',
      'indicatifPresentYouAll': 'Vous',
      'indicatifPresentThey': 'Ils/Elles'
    };
    return labels[personne] || personne;
  }
}