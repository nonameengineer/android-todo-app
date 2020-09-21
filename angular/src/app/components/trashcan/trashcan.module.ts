import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrashcanRoutingModule } from './trashcan-routing.module';
import { TrashcanComponent } from './trashcan.component';


@NgModule({
  declarations: [TrashcanComponent],
  imports: [
    CommonModule,
    TrashcanRoutingModule
  ]
})
export class TrashcanModule { }
