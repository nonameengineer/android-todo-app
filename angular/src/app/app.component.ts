import { Component, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  constructor(
    private themeService: ThemeService,
    private elementRef: ElementRef,
  ) {}

  changeTheme(): void {
    const isDark = this.isDark$.getValue();
    isDark ? this.isDark$.next(false) : this.isDark$.next(true);

    const BODY_DARK_CLASS = 'dark';
    this.elementRef.nativeElement.ownerDocument.body.classList.toggle(BODY_DARK_CLASS);
  }

  ngOnInit(): void {
    this.isDark$.subscribe(v => console.log(v));
  }
}
