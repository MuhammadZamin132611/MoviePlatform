import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MaterialModule, NgClass, RouterLink],
  selector: 'app-side-menu',
  styleUrl: './side-menu.css',
  templateUrl: './side-menu.html',
})
export class SideMenu {
  activeNav = signal<string>('home');

  navItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'search', icon: 'search', label: 'Search' },
    { id: 'tv', icon: 'tv', label: 'TV' },
    { id: 'movies', icon: 'movie', label: 'Movies' },
    { id: 'sports', icon: 'sports_cricket', label: 'Sports' },
    { id: 'categories', icon: 'grid_view', label: 'Categories' },
    { id: 'profile', icon: 'account_circle', label: 'My Space' },
  ];

  selectNav(id: string) {
    this.activeNav.set(id);
  }
}
