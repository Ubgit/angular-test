import { Injectable } from '@angular/core';
import { Product } from './classes/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private products: Product[] = [];
  static localStorageKey = 'products';

  constructor() {
    if (this.isLocalStorageAvailable()) this.loadProductsFromLocalStorage();
  }

  getProducts(): Product[] {
    if (this.isLocalStorageAvailable()) this.loadProductsFromLocalStorage();
    //console.log("products", this.products);
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
    if (this.isLocalStorageAvailable()) this.saveProductsToLocalStorage();
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1); // Supprime l'élément à l'index spécifié
    if (this.isLocalStorageAvailable()) this.saveProductsToLocalStorage();
  }

  private saveProductsToLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(ProductService.localStorageKey, JSON.stringify(this.products));
    }
  }

  private loadProductsFromLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      this.products=[];
      const productsFromStorage = localStorage.getItem(ProductService.localStorageKey);
      if (productsFromStorage) {
        const arrayInLocalStorage: any[] = JSON.parse(productsFromStorage);
        arrayInLocalStorage.forEach(element => {
          this.products.push(new Product(element._name, element._price));
        });
      }
    }
  }

  private isLocalStorageAvailable(): boolean {
    let isAvailable:boolean = typeof window !== 'undefined' && !!window.localStorage;
    //console.log("isAvailable", isAvailable);
    return isAvailable;
  }
}