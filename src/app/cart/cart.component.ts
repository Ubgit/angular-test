// cart.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../classes/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  @Input() produits: Product[] = [];
  @Input() totalPrix: number = 0;
  @Output() addProduit = new EventEmitter<Product>();
  @Output() removeProduit = new EventEmitter<Product>();

  compterProduit(produit: Product): number {
    return this.produits.filter(p => p.nom === produit.nom).length;
  }

  onAddProduit(produit: Product) {
    this.addProduit.emit(produit);
  }

  onRemoveProduit(produit: Product) {
    this.removeProduit.emit(produit);
  }
}