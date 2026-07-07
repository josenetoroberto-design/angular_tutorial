import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import {RouterOutlet } from '@angular/router';
import { ProductsGrid } from './products/products-grid/products-grid';

@Component({
  selector: 'app-root',
  imports: [Header,RouterOutlet,ProductsGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutorial');
}
