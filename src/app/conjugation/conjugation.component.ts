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

  // Cette fonction retourne les labels en français pour chaque pronom personnel
  getPersonneLabel(personne: string): string {
    const labels: { [key: string]: string } = {
      // Indicatif Présent
      'indicatifPresentI': 'Je',
      'indicatifPresentYou': 'Tu',
      'indicatifPresentHeSheIt': 'Il/Elle/On',
      'indicatifPresentWe': 'Nous',
      'indicatifPresentYouAll': 'Vous',
      'indicatifPresentThey': 'Ils/Elles',

      // Conditionnel Présent
      'conditionnelPresentI': 'Je',
      'conditionnelPresentYou': 'Tu',
      'conditionnelPresentHeSheIt': 'Il/Elle/On',
      'conditionnelPresentWe': 'Nous',
      'conditionnelPresentYouAll': 'Vous',
      'conditionnelPresentThey': 'Ils/Elles',

      // Conditionnel Passé 1ère forme
      'conditionnelPasse1reFormeI': 'Je',
      'conditionnelPasse1reFormeYou': 'Tu',
      'conditionnelPasse1reFormeHeSheIt': 'Il/Elle/On',
      'conditionnelPasse1reFormeWe': 'Nous',
      'conditionnelPasse1reFormeYouAll': 'Vous',
      'conditionnelPasse1reFormeThey': 'Ils/Elles',

      // Conditionnel Passé 2e forme
      'conditionnelPasse2eFormeI': 'Je',
      'conditionnelPasse2eFormeYou': 'Tu',
      'conditionnelPasse2eFormeHeSheIt': 'Il/Elle/On',
      'conditionnelPasse2eFormeWe': 'Nous',
      'conditionnelPasse2eFormeYouAll': 'Vous',
      'conditionnelPasse2eFormeThey': 'Ils/Elles',

      // Subjonctif Présent
      'subjonctifPresentI': 'Que je',
      'subjonctifPresentYou': 'Que tu',
      'subjonctifPresentHeSheIt': 'Qu\'il/elle/on',
      'subjonctifPresentWe': 'Que nous',
      'subjonctifPresentYouAll': 'Que vous',
      'subjonctifPresentThey': 'Qu\'ils/elles',

      // Subjonctif Imparfait
      'subjonctifImparfaitI': 'Que je',
      'subjonctifImparfaitYou': 'Que tu',
      'subjonctifImparfaitHeSheIt': 'Qu\'il/elle/on',
      'subjonctifImparfaitWe': 'Que nous',
      'subjonctifImparfaitYouAll': 'Que vous',
      'subjonctifImparfaitThey': 'Qu\'ils/elles',

      // Impératif Présent
      'imperatifPresentFirst': 'Tu',
      'imperatifPresentSecond': 'Nous',
      'imperatifPresentThird': 'Vous',

      // Impératif Passé
      'imperatifPasseFirst': 'Tu',
      'imperatifPasseSecond': 'Nous',
      'imperatifPasseThird': 'Vous',

      // Indicatif Futur Simple
      'indicatifFuturSimpleI': 'Je',
      'indicatifFuturSimpleYou': 'Tu',
      'indicatifFuturSimpleHeSheIt': 'Il/Elle/On',
      'indicatifFuturSimpleWe': 'Nous',
      'indicatifFuturSimpleYouAll': 'Vous',
      'indicatifFuturSimpleThey': 'Ils/Elles',

      // Indicatif Futur Antérieur
      'indicatifFuturAnterieurI': 'J\'aurai',
      'indicatifFuturAnterieurYou': 'Tu auras',
      'indicatifFuturAnterieurHeSheIt': 'Il/Elle/On aura',
      'indicatifFuturAnterieurWe': 'Nous aurons',
      'indicatifFuturAnterieurYouAll': 'Vous aurez',
      'indicatifFuturAnterieurThey': 'Ils/Elles auront',

      // Indicatif Passé Composé
      'indicatifPasseComposeI': 'J\'ai',
      'indicatifPasseComposeYou': 'Tu as',
      'indicatifPasseComposeHeSheIt': 'Il/Elle/On a',
      'indicatifPasseComposeWe': 'Nous avons',
      'indicatifPasseComposeYouAll': 'Vous avez',
      'indicatifPasseComposeThey': 'Ils/Elles ont',

      // Ajoutez d'autres temps et modes ici
    };

    return labels[personne] || personne;
  }
}
