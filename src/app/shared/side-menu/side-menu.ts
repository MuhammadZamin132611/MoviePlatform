import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [MaterialModule, RouterLinkActive, RouterLink],
  selector: 'app-side-menu',
  styleUrl: './side-menu.css',
  templateUrl: './side-menu.html',
})
export class SideMenu {
  navItems = [
    { id: 'home', icon: 'home', label: 'Home', link: '/' },
    { id: 'search', icon: 'search', label: 'Search', link: '/search' },
    { id: 'tv', icon: 'tv', label: 'TV', link: '/tv' },
    { id: 'movies', icon: 'movie', label: 'Movies', link: '/movies' },
    { id: 'sports', icon: 'sports_cricket', label: 'Sports', link: '/sports' },
    { id: 'categories', icon: 'grid_view', label: 'Categories', link: '/categories' },
    { id: 'profile', icon: 'account_circle', label: 'My Space', link: '/profile' },
  ];
}
