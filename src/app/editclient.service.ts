import { Injectable } from '@angular/core';
import { Client } from './classes/client';

@Injectable({
  providedIn: 'root'
})
export class EditclientService {

  constructor() { }
  private clientToEdit: Client | null = null;

  setClientToEdit(client: Client): void {
    this.clientToEdit = client;
  }

  updateClient(updatedClient: Client): void {
    if (this.clientToEdit) {
      this.clientToEdit.numss = updatedClient.numss;
      this.clientToEdit.nom = updatedClient.nom;
      this.clientToEdit.prenom = updatedClient.prenom;
      this.clientToEdit.adresse = updatedClient.adresse;
      this.clientToEdit.ville = updatedClient.ville;
      this.clientToEdit.pays = updatedClient.pays;
    }
  }

  getClientToEdit(): Client | null {
    return this.clientToEdit;
  }
}
