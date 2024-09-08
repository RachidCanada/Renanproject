import { Component, OnInit } from '@angular/core';
import { VerbService } from '../services/verb.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteVerbs: any[] = [];
  newFavorite: string = '';
  message: string = '';
  favoriteVerbId: string = '';
  retrievedFavorite: any = null;

  constructor(private verbService: VerbService) {}

  ngOnInit() {
    this.loadFavorites();
  }

  // Méthode pour charger tous les favoris
  loadFavorites() {
    this.verbService.getAllFavorites().subscribe(
      (response: any) => {
        this.favoriteVerbs = response.verbs || [];
        this.message = '';
      },
      (error) => {
        console.error('Erreur lors du chargement des favoris :', error);
        this.message = 'Erreur lors du chargement des favoris. Veuillez réessayer plus tard.';
      }
    );
  }

  // Méthode pour ajouter un favori
  addFavorite() {
    if (this.newFavorite.trim()) {
      this.verbService.addFavorite(this.newFavorite).subscribe(
        (response) => {
          this.message = `Verbe "${this.newFavorite}" ajouté aux favoris avec succès.`;
          this.newFavorite = '';
          this.loadFavorites();
        },
        (error) => {
          console.error(`Erreur lors de l'ajout du verbe ${this.newFavorite} aux favoris :`, error);
          this.message = `Erreur lors de l'ajout du verbe "${this.newFavorite}". Veuillez réessayer.`;
        }
      );
    } else {
      this.message = 'Veuillez entrer un verbe valide.';
    }
  }

  // Méthode pour obtenir un favori spécifique
  getFavorite(id: string) {
    this.verbService.getFavorite(id).subscribe(
      (response) => {
        this.retrievedFavorite = response;
        this.message = `Favori obtenu : ${response.verb}`;
      },
      (error) => {
        console.error(`Erreur lors de la récupération du favori ${id} :`, error);
        this.message = `Erreur lors de la récupération du favori avec l'ID "${id}". Veuillez réessayer.`;
      }
    );
  }

  // Méthode pour supprimer un favori
  deleteFavorite(id: string) {
    if (confirm('Voulez-vous vraiment supprimer ce favori ?')) {
      this.verbService.deleteFavorite(id).subscribe(
        (response) => {
          this.message = 'Favori supprimé avec succès.';
          this.loadFavorites();
        },
        (error) => {
          console.error(`Erreur lors de la suppression du favori ${id} :`, error);
          this.message = 'Erreur lors de la suppression du favori. Veuillez réessayer.';
        }
      );
    }
  }
}
