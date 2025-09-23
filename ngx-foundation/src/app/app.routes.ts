import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Users } from './features/users/users';
import { Create } from './features/users/create/create';
import { View } from './features/users/view/view';
import { Edit } from './features/users/edit/edit';
import { Notfound } from './features/errors/notfound/notfound';
import { Cars } from './features/cars/cars';
import { Create as CreateCar } from './features/cars/create/create';
import { View as ViewCar } from './features/cars/view/view';
import { Edit as EditCar } from './features/cars/edit/edit';

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
  // Routes pour Users
  { path: 'users', component: Users },
  { path: 'users/new', component: Create },
  { path: 'users/:id/edit', component: Edit },
  { path: 'users/:id', component: View },
  
  // Routes pour Cars
  { path: 'cars', component: Cars },
  { path: 'cars/new', component: CreateCar },
  { path: 'cars/:id/edit', component: EditCar },
  { path: 'cars/:id', component: ViewCar },
  
  // Route pour les erreurs 404 (doit être la dernière)
  // { path: '**', component: Notfound }
];
