import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./components/new-card/new-card.module').then(m => m.NewCardModule)
  },
  {
    path: 'trashcan',
    loadChildren: () => import('./components/trashcan/trashcan.module').then(m => m.TrashcanModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
