import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../../material.module';
import { SideMenu } from '../../shared/side-menu/side-menu';

export interface TvShow {
  id: number;
  title: string;
  channel: 'StarPlus' | 'Colors' | 'Star Bharat' | 'Hotstar Specials' | 'HBO';
  genre: 'Drama' | 'Reality' | 'Thriller' | 'Comedy' | 'Mythology';
  language: string;
  rating: string;
  episodeBadge: string;
  poster: string;
  backdrop: string;
  description: string;
  isFeatured?: boolean;
  isNewEpisode?: boolean;
}
@Component({
  imports: [MaterialModule, CommonModule, RouterLink, SideMenu],
  selector: 'app-tv',
  styleUrl: './tv.css',
  templateUrl: './tv.html',
})
export class Tv {
  selectedChannel = signal<string>('All');
  selectedGenre = signal<string>('All');
  watchlist = signal<number[]>([1]);

  channels = [
    { name: 'All', tag: 'All Networks' },
    { name: 'StarPlus', tag: 'Rishta Wahi, Baat Nayi' },
    { name: 'Hotstar Specials', tag: 'Exclusive Originals' },
    { name: 'Colors', tag: 'Entertainment Hub' },
    { name: 'Star Bharat', tag: 'Family & Mytho' },
    { name: 'HBO', tag: 'Global Prestige' },
  ];

  genres = ['All', 'Drama', 'Reality', 'Thriller', 'Comedy', 'Mythology'];

  shows = signal<TvShow[]>([
    {
      id: 1,
      title: 'Anupama',
      channel: 'StarPlus',
      genre: 'Drama',
      language: 'Hindi',
      rating: 'U/A 13+',
      episodeBadge: 'New Episode • 9:00 PM',
      poster: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1600&q=80',
      description: 'After years of sacrificing her own dreams for her family, Anupama steps out to rebuild her identity on her own terms.',
      isFeatured: true,
      isNewEpisode: true,
    },
    {
      id: 2,
      title: 'The Night Manager',
      channel: 'Hotstar Specials',
      genre: 'Thriller',
      language: 'Hindi • Tamil • Telugu',
      rating: 'U/A 16+',
      episodeBadge: '2 Seasons • All Episodes',
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80',
      description: 'A former soldier turned luxury hotel night manager is recruited by intelligence operatives to infiltrate an arms dealer’s inner circle.',
    },
    {
      id: 3,
      title: 'Yeh Rishta Kya Kehlata Hai',
      channel: 'StarPlus',
      genre: 'Drama',
      language: 'Hindi',
      rating: 'U/A 13+',
      episodeBadge: 'New Episode • 9:30 PM',
      poster: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80',
      description: 'Generations of love, tradition, and modern aspirations collide in one of Indian television’s most iconic family sagas.',
      isNewEpisode: true,
    },
    {
      id: 4,
      title: 'Koffee with Karan',
      channel: 'Hotstar Specials',
      genre: 'Reality',
      language: 'English • Hindi',
      rating: 'U/A 16+',
      episodeBadge: 'Season 8 • 12 Episodes',
      poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1600&q=80',
      description: 'Unfiltered confessions, rapid-fire rounds, and Bollywood’s biggest stars sit across from Karan Johar on the famous couch.',
    },
    {
      id: 5,
      title: 'Devon Ke Dev... Mahadev',
      channel: 'Star Bharat',
      genre: 'Mythology',
      language: 'Hindi',
      rating: 'U',
      episodeBadge: 'All Episodes',
      poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
      description: 'Witness the epic journey of Lord Shiva from an ascetic yogi to a family man alongside Goddess Parvati.',
    },
    {
      id: 6,
      title: 'House of the Dragon',
      channel: 'HBO',
      genre: 'Drama',
      language: 'English • Hindi',
      rating: 'A',
      episodeBadge: '2 Seasons',
      poster: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=1600&q=80',
      description: 'Set 200 years before the events of Game of Thrones, House Targaryen fractures into a brutal civil war for the Iron Throne.',
    },
    {
      id: 7,
      title: 'Laughter Chefs',
      channel: 'Colors',
      genre: 'Comedy',
      language: 'Hindi',
      rating: 'U/A 13+',
      episodeBadge: 'Weekend Special',
      poster: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80',
      description: 'Celebrities swap scripts for spatulas in a chaotic, high-energy kitchen battle where comedy is the main ingredient.',
      isNewEpisode: true,
    },
    {
      id: 8,
      title: 'Criminal Justice',
      channel: 'Hotstar Specials',
      genre: 'Thriller',
      language: 'Hindi • Tamil • Telugu',
      rating: 'U/A 16+',
      episodeBadge: '3 Seasons',
      poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=1600&q=80',
      description: 'Advocate Madhav Mishra takes on morally complex courtroom battles where every clue hides a darker truth.',
    },
  ]);

  featuredShow = computed(
    () => this.shows().find((s) => s.isFeatured) ?? this.shows()[0]
  );

  todaysCatchup = computed(() =>
    this.shows().filter((s) => s.isNewEpisode)
  );

  filteredShows = computed(() => {
    const channel = this.selectedChannel();
    const genre = this.selectedGenre();

    return this.shows().filter((show) => {
      const matchChannel = channel === 'All' || show.channel === channel;
      const matchGenre = genre === 'All' || show.genre === genre;
      return matchChannel && matchGenre;
    });
  });

  toggleWatchlist(id: number, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.watchlist.update((list) =>
      list.includes(id) ? list.filter((item) => item !== id) : [...list, id]
    );
  }

  isInWatchlist(id: number): boolean {
    return this.watchlist().includes(id);
  }

  resetFilters() {
    this.selectedChannel.set('All');
    this.selectedGenre.set('All');
  }
}
