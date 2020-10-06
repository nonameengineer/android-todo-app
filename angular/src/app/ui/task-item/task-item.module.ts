import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item.component';
import { MoreMenuModule } from '../more-menu/more-menu.module';

@NgModule({
  declarations: [TaskItemComponent],
  imports: [
    CommonModule,
    MoreMenuModule,
  ],
  exports: [TaskItemComponent]
})
export class TaskItemModule { }
