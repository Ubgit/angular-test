import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/client';
import { TableauclientsService } from '../tableauclients.service';
import { EditclientService } from '../editclient.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listeclients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listeclients.component.html',
  styleUrl: './listeclients.component.css'
})
export class ListeclientsComponent implements OnInit {
  clients: Client[] = [];
  clientToEdit: Client | null = null;
  newClient: Client = new Client('', '', '', '', '', ''); // Initialise un nouveau client vide

  constructor(
    private tableauclientsService: TableauclientsService,
    private editclientService: EditclientService
  ) {}

  ngOnInit(): void {
    this.clients = this.tableauclientsService.getClients();
    this.tableauclientsService.selectedClient$.subscribe(client => {
      this.clientToEdit = client;
      if (client) {
        this.editclientService.setClientToEdit(client);
      }
    });
  }

  onEdit(client: Client): void {
    this.tableauclientsService.selectClient(client);
  }

  onUpdate(): void {
    if (this.clientToEdit) {
      this.editclientService.updateClient(this.clientToEdit);
      this.clientToEdit = null;
    }
  }

  onAdd(): void {
    this.tableauclientsService.addClient(this.newClient);
    this.newClient = new Client('', '', '', '', '', ''); // Réinitialise le formulaire après ajout
  }
}
