import { Injectable } from '@angular/core';
import { Client } from './classes/client';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableauclientsService {

  constructor() { }

  private clients: Client[] = [
    new Client('12345', 'Dupont', 'Jean', '123 rue A', 'Paris', 'France'),
    new Client('67890', 'Durand', 'Marie', '456 rue B', 'Lyon', 'France'),
    new Client('123', 'Dupont', 'Jean', '123 rue de Paris', 'Paris', 'France'),
    new Client('456', 'Durand', 'Marie', '456 avenue de Lyon', 'Lyon', 'France')
  ];

  private selectedClientSubject = new BehaviorSubject<Client | null>(null);
  selectedClient$: Observable<Client | null> = this.selectedClientSubject.asObservable();

  getClients(): Client[] {
    return this.clients;
  }

  updateClient(updatedClient: Client): void {
    const index = this.clients.findIndex(c => c.numss === updatedClient.numss);
    if (index !== -1) {
      this.clients[index] = updatedClient;
    }
  }

  addClient(client: Client): void {
    this.clients.push(client);
  }

  selectClient(client: Client): void {
    this.selectedClientSubject.next(client);
  }
}