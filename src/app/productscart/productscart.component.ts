// productscart.component.ts
import { Component, signal } from '@angular/core';
import { Product } from '../classes/product';
import { Panier, Statut } from '../classes/panier';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductslistComponent } from "../productslist/productslist.component";
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-productscart',
  standalone: true,
  imports: [MatTabsModule, ProductslistComponent, CartComponent,CommonModule],
  templateUrl: './productscart.component.html',
  styleUrl: './productscart.component.css'
})

export class ProductscartComponent {
  produits: Product[] = [
    { nom: 'Produit 1', description: 'Description 1', prix: 10 },
    { nom: 'Produit 2', description: 'Description 2', prix: 20 },
    { nom: 'Produit 3', description: 'Description 3', prix: 30 }
  ];

  panier = new Panier();
  produitsSignal = signal<Product[]>([]);

  ajouterProduit(produit: Product) {
    this.produitsSignal.update((produits) => {
      produits.push(produit);
      return produits;
    });
  }

  supprimerProduit(produit: Product) {
    this.produitsSignal.update((produits) => {
      const index = produits.indexOf(produit);
      if (index > -1) {
        // Utiliser `splice()` pour supprimer l'élément
        produits.splice(index, 1);
      }
      return produits;
    });
  }

  totalPrix(): number {
    return this.produitsSignal().reduce((acc, produit) => acc + produit.prix, 0);
  }

  changerStatut() {
    if (this.panier.statut === Statut.Payer) {
      this.panier.statut = Statut.Payé;
    }
  }
}