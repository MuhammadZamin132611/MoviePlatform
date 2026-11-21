import { Component, computed, signal } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterLink } from '@angular/router';
import { SideMenu } from '../../shared/side-menu/side-menu';

export interface MediaItem {
  id: number;
  title: string;
  category: 'Movies' | 'TV' | 'Sports' | 'Originals';
  year: number;
  language: string;
  rating: string;
  duration: string;
  poster: string;
  trending?: boolean;
}

@Component({
  imports: [MaterialModule, RouterLink, SideMenu],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {

  searchQuery = signal<string>('');
  selectedCategory = signal<string>('All');

  categories = ['All', 'Movies', 'TV', 'Sports', 'Originals'];

  popularSearches = [
    'IND vs AUS Live',
    'Marvel Studios',
    'The Night Manager',
    'Premier League',
    'Criminal Justice',
    'Anupama',
    'Koffee with Karan',
    'Aarya',
  ];

  // Sample catalog — replace with your API/service data
  catalog = signal<MediaItem[]>([
    {
      id: 1,
      title: 'The Night Manager',
      category: 'Originals',
      year: 2023,
      language: 'Hindi',
      rating: 'U/A 16+',
      duration: '2 Seasons',
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
    {
      id: 2,
      title: 'IND vs AUS: Border-Gavaskar Trophy',
      category: 'Sports',
      year: 2026,
      language: 'English • Hindi',
      rating: 'LIVE',
      duration: 'Cricket',
      poster: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
    {
      id: 3,
      title: '12th Fail',
      category: 'Movies',
      year: 2023,
      language: 'Hindi',
      rating: 'U',
      duration: '2h 26m',
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
    {
      id: 4,
      title: 'Criminal Justice: Adhura Sach',
      category: 'Originals',
      year: 2022,
      language: 'Hindi',
      rating: 'U/A 16+',
      duration: '3 Seasons',
      poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
    {
      id: 5,
      title: 'Premier League: Arsenal vs Chelsea',
      category: 'Sports',
      year: 2026,
      language: 'English',
      rating: 'LIVE',
      duration: 'Football',
      poster: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
    {
      id: 6,
      title: 'Anupama',
      category: 'TV',
      year: 2026,
      language: 'Hindi',
      rating: 'U/A 13+',
      duration: 'StarPlus',
      poster: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
    {
      id: 7,
      title: 'Avengers: Endgame',
      category: 'Movies',
      year: 2019,
      language: 'English • Hindi',
      rating: 'U/A 13+',
      duration: '3h 02m',
      poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
    {
      id: 8,
      title: 'Aarya: Antim Vaar',
      category: 'Originals',
      year: 2024,
      language: 'Hindi',
      rating: 'U/A 16+',
      duration: '3 Seasons',
      poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
    {
      id: 9,
      title: 'Munjya',
      category: 'Movies',
      year: 2024,
      language: 'Hindi',
      rating: 'U/A 13+',
      duration: '2h 03m',
      poster: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
    {
      id: 10,
      title: 'Showtime',
      category: 'Originals',
      year: 2024,
      language: 'Hindi',
      rating: 'U/A 16+',
      duration: '1 Season',
      poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=500&q=80',
      trending: true,
    },
  ]);

  filteredResults = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const category = this.selectedCategory();

    return this.catalog().filter((item) => {
      const matchesCategory = category === 'All' || item.category === category;
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.language.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  });

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  selectPopularSearch(term: string) {
    this.searchQuery.set(term);
    this.selectedCategory.set('All');
  }

  clearSearch() {
    this.searchQuery.set('');
  }
}
