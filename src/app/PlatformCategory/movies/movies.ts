import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../../material.module';
import { SideMenu } from '../../shared/side-menu/side-menu';

export interface Movie {
  id: number;
  title: string;
  studio: 'Marvel' | 'Disney' | 'Pixar' | 'Star Studios' | '20th Century';
  genre: 'Action' | 'Drama' | 'Sci-Fi' | 'Comedy' | 'Thriller' | 'Animation';
  language: string;
  primaryLanguage: 'Hindi' | 'English' | 'Tamil' | 'Telugu' | 'Malayalam';
  year: number;
  duration: string;
  rating: string;
  qualityBadge: '4K Dolby Vision' | 'IMAX Enhanced' | 'Full HD';
  poster: string;
  backdrop: string;
  description: string;
  isFeatured?: boolean;
  isBlockbuster?: boolean;
}

@Component({
  imports: [MaterialModule, RouterLink, SideMenu],
  selector: 'app-movies',
  styleUrl: './movies.css',
  templateUrl: './movies.html',
})
export class Movies {
  selectedLanguage = signal<string>('All');
  selectedGenre = signal<string>('All');
  selectedStudio = signal<string>('All');
  watchlist = signal<number[]>([1, 3]);

  languages = ['All', 'Hindi', 'English', 'Tamil', 'Telugu', 'Malayalam'];
  genres = ['All', 'Action', 'Drama', 'Sci-Fi', 'Comedy', 'Thriller', 'Animation'];
  studios = [
    { name: 'All', subtitle: 'All Collections' },
    { name: 'Marvel', subtitle: 'Superheroes & Multiverse' },
    { name: 'Star Studios', subtitle: 'Indian Blockbusters' },
    { name: 'Disney', subtitle: 'Timeless Magic' },
    { name: 'Pixar', subtitle: 'Animated Worlds' },
    { name: '20th Century', subtitle: 'Sci-Fi & Cinema Classics' },
  ];

  movies = signal<Movie[]>([
    {
      id: 1,
      title: 'Avengers: Endgame',
      studio: 'Marvel',
      genre: 'Action',
      language: 'English • Hindi • Tamil • Telugu',
      primaryLanguage: 'English',
      year: 2019,
      duration: '3h 02m',
      rating: 'U/A 13+',
      qualityBadge: 'IMAX Enhanced',
      poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1600&q=80',
      description: 'After the devastating events of Infinity War, the remaining Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.',
      isFeatured: true,
      isBlockbuster: true,
    },
    {
      id: 2,
      title: '12th Fail',
      studio: 'Star Studios',
      genre: 'Drama',
      language: 'Hindi • Tamil • Telugu',
      primaryLanguage: 'Hindi',
      year: 2023,
      duration: '2h 26m',
      rating: 'U',
      qualityBadge: 'Full HD',
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80',
      description: 'Based on a true story, Manoj Kumar Sharma restarts his academic journey from scratch to attempt the world’s toughest competitive exam: UPSC.',
      isBlockbuster: true,
    },
    {
      id: 3,
      title: 'Avatar: The Way of Water',
      studio: '20th Century',
      genre: 'Sci-Fi',
      language: 'English • Hindi • Tamil • Telugu',
      primaryLanguage: 'English',
      year: 2022,
      duration: '3h 12m',
      rating: 'U/A 13+',
      qualityBadge: '4K Dolby Vision',
      poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
      description: 'Jake Sully and Neytiri have formed a family and are doing everything to stay together when an old threat returns to finish what was started.',
      isBlockbuster: true,
    },
    {
      id: 4,
      title: 'Manjummel Boys',
      studio: 'Star Studios',
      genre: 'Thriller',
      language: 'Malayalam • Tamil • Hindi • Telugu',
      primaryLanguage: 'Malayalam',
      year: 2024,
      duration: '2h 15m',
      rating: 'U',
      qualityBadge: '4K Dolby Vision',
      poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=1600&q=80',
      description: 'A group of friends on a vacation to Kodaikanal face a life-or-death rescue mission when one of them falls into the perilous Guna Caves.',
      isBlockbuster: true,
    },
    {
      id: 5,
      title: 'Inside Out 2',
      studio: 'Pixar',
      genre: 'Animation',
      language: 'English • Hindi • Tamil',
      primaryLanguage: 'English',
      year: 2024,
      duration: '1h 36m',
      rating: 'U',
      qualityBadge: '4K Dolby Vision',
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80',
      description: 'Joy, Sadness, Anger, Fear and Disgust aren’t sure how to feel when Anxiety, Envy, Ennui, and Embarrassment move into Headquarters.',
    },
    {
      id: 6,
      title: 'Vikram',
      studio: 'Star Studios',
      genre: 'Action',
      language: 'Tamil • Hindi • Telugu • Malayalam',
      primaryLanguage: 'Tamil',
      year: 2022,
      duration: '2h 54m',
      rating: 'U/A 16+',
      qualityBadge: '4K Dolby Vision',
      poster: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=1600&q=80',
      description: 'A high-octane action thriller where a special investigator uncovers a masked vigilante group and an international drug syndicate.',
    },
    {
      id: 7,
      title: 'Brahmastra: Part One – Shiva',
      studio: 'Disney',
      genre: 'Action',
      language: 'Hindi • Tamil • Telugu • Malayalam',
      primaryLanguage: 'Hindi',
      year: 2022,
      duration: '2h 47m',
      rating: 'U/A 13+',
      qualityBadge: '4K Dolby Vision',
      poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1600&q=80',
      description: 'A DJ with mysterious fire powers discovers his connection to an ancient secret society guarding the Astras.',
    },
    {
      id: 8,
      title: 'Salaar: Part 1 – Ceasefire',
      studio: 'Star Studios',
      genre: 'Action',
      language: 'Telugu • Hindi • Tamil • Malayalam',
      primaryLanguage: 'Telugu',
      year: 2023,
      duration: '2h 55m',
      rating: 'A',
      qualityBadge: '4K Dolby Vision',
      poster: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1600&q=80',
      description: 'In the dystopian city-state of Khansaar, a quiet mechanic honors a childhood vow when his best friend’s throne is threatened.',
    },
    {
      id: 9,
      title: 'Munjya',
      studio: 'Star Studios',
      genre: 'Comedy',
      language: 'Hindi',
      primaryLanguage: 'Hindi',
      year: 2024,
      duration: '2h 03m',
      rating: 'U/A 13+',
      qualityBadge: 'Full HD',
      poster: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80',
      description: 'A young man’s visit to his ancestral village unleashes a mischievous folk spirit obsessed with getting married.',
    },
    {
      id: 10,
      title: 'Guardians of the Galaxy Vol. 3',
      studio: 'Marvel',
      genre: 'Sci-Fi',
      language: 'English • Hindi • Tamil • Telugu',
      primaryLanguage: 'English',
      year: 2023,
      duration: '2h 30m',
      rating: 'U/A 13+',
      qualityBadge: 'IMAX Enhanced',
      poster: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80',
      backdrop: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80',
      description: 'Peter Quill rallies his team around him to defend the universe and embark on a dangerous mission to save Rocket’s life.',
    },
  ]);

  featuredMovie = computed(
    () => this.movies().find((m) => m.isFeatured) ?? this.movies()[0]
  );

  topBlockbusters = computed(() =>
    this.movies().filter((m) => m.isBlockbuster)
  );

  filteredMovies = computed(() => {
    const lang = this.selectedLanguage();
    const genre = this.selectedGenre();
    const studio = this.selectedStudio();

    return this.movies().filter((movie) => {
      const matchLang =
        lang === 'All' ||
        movie.primaryLanguage === lang ||
        movie.language.toLowerCase().includes(lang.toLowerCase());
      const matchGenre = genre === 'All' || movie.genre === genre;
      const matchStudio = studio === 'All' || movie.studio === studio;
      return matchLang && matchGenre && matchStudio;
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
    this.selectedLanguage.set('All');
    this.selectedGenre.set('All');
    this.selectedStudio.set('All');
  }
}
