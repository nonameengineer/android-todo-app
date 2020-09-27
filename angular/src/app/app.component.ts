import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  constructor(
    private themeService: ThemeService,
  ) {}

  changeTheme(): void {
    this.isDark$.next(!this.isDark$.getValue());
  }
}
