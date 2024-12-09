
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription.component';
@NgModule({
  declarations: [
    AppComponent,
    FormulaireInscriptionComponent // Déclarer le composant ici
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
