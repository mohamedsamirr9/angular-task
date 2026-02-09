import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Products } from './components/products/products';
import { Nav } from './components/nav/nav';

@Component({
  selector: 'app-root',
  imports: [Products, RouterModule, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project');
}
