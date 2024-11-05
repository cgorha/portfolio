import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{
  isDarkMode = false;

  constructor(private themeService: ThemeService){}

  ngOnInit(): void {
      this.themeService.isDarkMode$.subscribe((isDark) => {
        this.isDarkMode = isDark;
        console.log("Is Dark Mode in hero component: ", this.isDarkMode);
      });
  }

}
