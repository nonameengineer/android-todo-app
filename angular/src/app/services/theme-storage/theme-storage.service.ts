import { Injectable } from '@angular/core';

const DARK_THEME_STORAGE_KEY = 'isDark';

@Injectable({
  providedIn: 'root'
})
export class ThemeStorageService {

  constructor() { }

  saveIsDarkTheme(isDark: boolean): void {
    localStorage.setItem(DARK_THEME_STORAGE_KEY, isDark.toString());
  }

  getIsDarkTheme(): boolean {
    return localStorage.getItem(DARK_THEME_STORAGE_KEY) === 'true';
  }
}
