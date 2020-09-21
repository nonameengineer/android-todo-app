import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionSettingsRoutingModule } from './section-settings-routing.module';
import { SectionSettingsComponent } from './section-settings.component';
import { SectionTitleModule } from '../../ui/section-title/section-title.module';


@NgModule({
  declarations: [SectionSettingsComponent],
  imports: [
    CommonModule,
    SectionSettingsRoutingModule,
    SectionTitleModule,
  ],
})
export class SectionSettingsModule { }
