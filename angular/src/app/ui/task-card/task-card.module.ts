import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from '../color-picker/color-picker.module';



@NgModule({
  declarations: [TaskCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ColorPickerModule,
  ],
  exports: [TaskCardComponent]
})
export class TaskCardModule { }
