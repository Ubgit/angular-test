// panier.ts
import { Product } from './product';

export enum Statut {
  Payer = 'Payer',
  Payé = 'Payé'
}

export class Panier {
  produits: Product[] = [];
  statut: Statut = Statut.Payer;
}