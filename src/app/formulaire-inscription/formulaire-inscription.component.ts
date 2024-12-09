import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-formulaire-inscription',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf],
  templateUrl: './formulaire-inscription.component.html',
  styleUrl: './formulaire-inscription.component.css'
})
export class FormulaireInscriptionComponent {
  showModal = false;
  formData = {
    nom: '',
    email: '',
    motdepasse: ''
  };

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    console.log('Formulaire soumis:', this.formData);
    this.closeModal();
  }
}