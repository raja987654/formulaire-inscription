import { Component } from '@angular/core';

import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormulaireInscriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulaire-inscription';
}