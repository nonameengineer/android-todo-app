const DARK_THEME_STORAGE_KEY = 'isDark';

export class ThemeStorageService {

  saveIsDarkTheme(isDark: boolean): void {
    localStorage.setItem(DARK_THEME_STORAGE_KEY, isDark.toString());
  }

  getIsDarkTheme(): boolean {
    return localStorage.getItem(DARK_THEME_STORAGE_KEY) === 'true';
  }
}
