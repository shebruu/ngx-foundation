import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Users } from './features/users/users';
import { Create } from './features/users/create/create';
import { View } from './features/users/view/view';
import { Edit } from './features/users/edit/edit';
import { Notfound } from './features/errors/notfound/notfound';

export const routes: Routes = [
      {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home
  },

  {path: 'users', component: Users },
  {path: 'users/new', component: Create },
  {path: 'users/:id/edit', component: Edit },

  {path: 'users/:id', component: View },
  // {path: '**', redirectTo: 'home' },
  {path: '**', component: Notfound }
];
;
