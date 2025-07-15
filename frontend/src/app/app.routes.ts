// app.routes.ts
import { Routes } from '@angular/router';
import { AllRequests } from './pages/all-requests/all-requests';
import { NewRequest } from './pages/new-request/new-request';

export const routes: Routes = [
  { path: 'all', component: AllRequests },
  { path: 'new', component: NewRequest },
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: '**', redirectTo: '/all' }
];
