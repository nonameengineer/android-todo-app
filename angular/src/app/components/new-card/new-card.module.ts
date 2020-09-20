import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewCardComponent} from './new-card.component';
import {NewCardRoutingModule} from './new-card-routing.module';


@NgModule({
  declarations: [NewCardComponent],
  imports: [
    CommonModule,
    NewCardRoutingModule
  ]
})
export class NewCardModule { }
