import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isDarkMode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  downloadResume() {
    // Opens the PDF in a new tab
    window.open('assets/resume.pdf', '_blank');
  }
}
