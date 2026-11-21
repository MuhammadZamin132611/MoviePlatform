import { Routes } from '@angular/router';
import { NotFound } from './shared/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./PlatformCategory/platformCategory.routes').then(m => m.PLATFORM_ROUTES)
    },

    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },

    {
        path: '**',
        component: NotFound
    }
];
