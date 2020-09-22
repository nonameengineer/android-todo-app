import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from '../color-picker/color-picker.module';
import { DateInputModule } from '../date-input/date-input.module';



@NgModule({
  declarations: [TaskCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ColorPickerModule,
    DateInputModule,
  ],
  exports: [TaskCardComponent]
})
export class TaskCardModule { }
