import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewCardComponent} from './new-card.component';
import {NewCardRoutingModule} from './new-card-routing.module';
import { ColorPickerModule } from '../../ui/color-picker/color-picker.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskCardModule } from '../../ui/task-card/task-card.module';


@NgModule({
  declarations: [NewCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewCardRoutingModule,
    ColorPickerModule,
    TaskCardModule,
  ],
})
export class NewCardModule { }
