// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Assurez-vous que c'est AppModule et pas autre chose

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
