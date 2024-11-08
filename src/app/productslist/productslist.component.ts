// productslist.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../classes/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})

export class ProductslistComponent {
  @Input() produits: Product[] = [];
  @Output() addProduit = new EventEmitter<Product>();

  onAddProduit(produit: Product) {
    this.addProduit.emit(produit);
  }
}