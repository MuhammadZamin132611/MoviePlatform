import { Component, signal, computed } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { SideMenu } from '../../shared/side-menu/side-menu';

interface MediaItem {
  id: number;
  title: string;
  category: 'Trending' | 'Sports' | 'Movies' | 'Shows';
  badge?: string;
  year: string;
  duration: string;
  genre: string;
  poster: string;
}


@Component({
  imports: [MaterialModule, SideMenu],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  
  selectedCategory = signal<string>('All');

  categories = ['All', 'Trending', 'Sports', 'Movies', 'Shows'];

  featuredHero = {
    title: 'INDIA vs AUSTRALIA — 3rd T20I',
    badge: 'LIVE • CRICKET',
    meta: '2026 • Hindi, English, Tamil • U/A 13+',
    description:
      'Catch every ball live from Bengaluru as India looks to clinch the series under the lights in a high-voltage T20 clash.',
    backdrop:
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1600&q=80'
  };

  allContent = signal<MediaItem[]>([
    {
      id: 1,
      title: 'The Night Manager',
      category: 'Shows',
      badge: 'HOTSTAR SPECIALS',
      year: '2026',
      duration: '2 Seasons',
      genre: 'Thriller • Drama',
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'IND vs AUS Highlights',
      category: 'Sports',
      badge: 'CRICKET',
      year: '2026',
      duration: '24m',
      genre: 'T20 International',
      poster: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Cyber Horizon',
      category: 'Movies',
      badge: 'BLOCKBUSTER',
      year: '2026',
      duration: '2h 18m',
      genre: 'Sci-Fi • Action',
      poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Premier League: Arsenal vs City',
      category: 'Sports',
      badge: 'LIVE',
      year: '2026',
      duration: 'Live',
      genre: 'Football',
      poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Crimson Tide',
      category: 'Trending',
      badge: 'TOP 10',
      year: '2025',
      duration: '1h 55m',
      genre: 'Mystery • Crime',
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'Empire of Sand',
      category: 'Movies',
      badge: 'NEW',
      year: '2026',
      duration: '2h 32m',
      genre: 'Adventure • History',
      poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  filteredContent = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') return this.allContent();
    return this.allContent().filter((item) => item.category === cat);
  });

  sportsContent = computed(() =>
    this.allContent().filter((item) => item.category === 'Sports')
  );

  

  selectCategory(cat: string) {
    this.selectedCategory.set(cat);
  }
}
