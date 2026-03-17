import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, ProductList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}