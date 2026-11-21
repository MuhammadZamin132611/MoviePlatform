import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Search } from './search/search';
import { Tv } from './tv/tv';
import { Movies } from './movies/movies';
import { Sports } from './sports/sports';
import { Categories } from './categories/categories';
import { Profile } from './profile/profile';

export const PLATFORM_ROUTES: Routes = [
    { path: '', component: Dashboard },
    { path: 'search', component: Search },
    { path: 'tv', component: Tv },
    { path: 'movies', component: Movies },
    { path: 'sports', component: Sports },
    { path: 'categories', component: Categories },
    { path: 'profile', component: Profile },
];