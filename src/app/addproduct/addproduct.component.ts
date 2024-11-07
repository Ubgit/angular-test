import { Component } from '@angular/core';
import { Product } from '../classes/product.model';
import { ProductService } from '../product.service';

import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  ngOnChanges(): void {
    this.products = this.productService.getProducts();
  }

  addProduct(name: string, price: number, event:MouseEvent): void {
    event.preventDefault;
    const newProduct = new Product(name, price);
    this.productService.addProduct(newProduct);
    this.products = this.productService.getProducts(); // Mettre à jour la liste des produits
  }
  
  deleteProduct(index: number, event:MouseEvent) {
    event.preventDefault;
    this.productService.deleteProduct(index); // Supprime l'élément à l'index spécifié
  }
}