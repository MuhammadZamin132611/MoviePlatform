import { Routes } from '@angular/router';
import { NotFound } from './shared/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./PlatformCategory/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
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
