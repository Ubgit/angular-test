import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//import { TodolistComponent } from "./todolist/todolist.component";
import { ProductscartComponent } from './productscart/productscart.component';
import { CartComponent } from './cart/cart.component';
import {BrowserModule} from'@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductscartComponent, CartComponent, ProductscartComponent, CommonModule,BrowserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-start';
}