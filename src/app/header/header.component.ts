import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { ThemeService } from '../theme.service';
import { FooterComponent } from "../footer/footer.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    NgIf,
    FooterComponent
],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSidenavOpen = false;
  isDarkMode = false;
  pageTitle = 'My Portfolio'; // Default title

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
      document.body.classList.toggle('dark-mode', isDark);
    });
  }

  ngOnInit(): void {
    // Listen for navigation changes and update the page title accordingly
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updatePageTitle(this.router.url);
      });
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  // Update pageTitle based on current route
  updatePageTitle(url: string) {
    switch (url) {
      case '/':
        this.pageTitle = 'Home';
        break;
      case '/about':
        this.pageTitle = 'About';
        break;
      case '/projects':
        this.pageTitle = 'Projects';
        break;
      case '/contact':
        this.pageTitle = 'Contact';
        break;
      default:
        this.pageTitle = 'My Portfolio'; // Fallback title
    }
  }
}
