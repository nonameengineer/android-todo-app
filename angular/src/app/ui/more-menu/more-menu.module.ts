import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreMenuComponent } from './more-menu.component';

@NgModule({
  declarations: [MoreMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [MoreMenuComponent]
})
export class MoreMenuModule { }
