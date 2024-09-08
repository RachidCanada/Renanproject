import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConjugationComponent } from './conjugation/conjugation.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RandomComponent } from './random/random.component';
import { VerbsComponent } from './verbs/verbs.component'; // Assurez-vous que ce chemin est correct.

// Définir les routes de l'application
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rediriger vers /login par défaut
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'verbs', component: VerbsComponent },
  { path: 'conjugate', component: ConjugationComponent },
  { path: 'favoris', component: FavoritesComponent },
  { path: 'random', component: RandomComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ConjugationComponent,
    FavoritesComponent,
    RandomComponent,
    VerbsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // Configuration du routeur avec les routes définies
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
