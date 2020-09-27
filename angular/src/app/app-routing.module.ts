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
  },
  {
    path: 'section-settings',
    loadChildren: () => import('./components/section-settings/section-settings.module').then(m => m.SectionSettingsModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./components/task/task.module').then(m => m.TaskModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
