import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SectionTitleModule } from '../../ui/section-title/section-title.module';
import { TaskItemModule } from '../../ui/task-item/task-item.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SectionTitleModule,
    TaskItemModule,
  ],
})
export class HomeModule { }
