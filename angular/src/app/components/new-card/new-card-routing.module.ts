import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCardComponent } from './new-card.component';

const routes: Routes = [
  {
    path: '',
    component: NewCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewCardRoutingModule { }
