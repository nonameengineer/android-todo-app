import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionSettingsComponent } from './section-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SectionSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionSettingsRoutingModule { }
