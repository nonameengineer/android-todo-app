import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrashcanRoutingModule } from './trashcan-routing.module';
import { TrashcanComponent } from './trashcan.component';
import { SectionTitleModule } from '../../ui/section-title/section-title.module';
import { TaskItemModule } from '../../ui/task-item/task-item.module';

@NgModule({
  declarations: [TrashcanComponent],
  imports: [
    CommonModule,
    TrashcanRoutingModule,
    SectionTitleModule,
    TaskItemModule,
  ],
})
export class TrashcanModule { }
