import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  template: '<app-header></app-header>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
