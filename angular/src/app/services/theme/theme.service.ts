import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeStorageService } from '../theme-storage/theme-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // By default is light theme
  isDark$ = new BehaviorSubject<boolean>(this.themeStorage.getIsDarkTheme());

  private renderer: Renderer2;

  constructor(
    private themeStorage: ThemeStorageService,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    this.isDark$.subscribe((value: boolean) => {
      const BODY_DARK_CLASS = 'dark';
      value
        ? this.renderer.addClass(document.body, BODY_DARK_CLASS)
        : this.renderer.removeClass(document.body, BODY_DARK_CLASS);

      this.themeStorage.saveIsDarkTheme(value);
    });
  }
}
