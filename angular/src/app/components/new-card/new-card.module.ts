import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewCardComponent} from './new-card.component';
import {NewCardRoutingModule} from './new-card-routing.module';
import { ColorPickerModule } from '../../ui/color-picker/color-picker.module';


@NgModule({
  declarations: [NewCardComponent],
  imports: [
    CommonModule,
    NewCardRoutingModule,
    ColorPickerModule,
  ],
})
export class NewCardModule { }
