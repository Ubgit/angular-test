import { Component, inject, signal, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  inputValue: string = '';  // Stocke la valeur saisie dans le formulaire
  //values: string[] = [];    // Stocke les valeurs ajoutées
  values = signal<string[]>([]); // Utilisation d'un signal pour la liste de valeurs

  //private ngZone = inject(NgZone);
  constructor(private ngZone: NgZone) {} // Injection de NgZone

  addValue() {
    //event.preventDefault;
    if (this.inputValue.trim()) { // Vérifie que l'entrée n'est pas vide
      //this.values.push(this.inputValue);  // Ajoute la valeur à la liste

      this.ngZone.runOutsideAngular(() => {
        this.values.update(currentValues => [...currentValues, this.inputValue]); // Mise à jour via le signal
      });
      this.inputValue = '';               // Réinitialise le champ de saisie
    }
  }

  deleteValue(index: number, event: MouseEvent) {
    event.preventDefault;
    //this.values.splice(index, 1); // Supprime l'élément à l'index spécifié
    this.ngZone.runOutsideAngular(() => {
      this.values.update(currentValues => currentValues.filter((_, i) => i !== index)); // Supprime l'élément spécifié
    });
  }

  sortValues() {
    this.ngZone.runOutsideAngular(() => {
      //this.values.sort((a, b) => a.localeCompare(b)); // Trie les valeurs par ordre alphabétique
      this.values.update(currentValues => [...currentValues].sort()); // Tri via le signal
    });
  }
}