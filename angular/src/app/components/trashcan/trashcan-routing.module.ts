import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrashcanComponent } from './trashcan.component';

const routes: Routes = [
  {
    path: '',
    component: TrashcanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrashcanRoutingModule { }
