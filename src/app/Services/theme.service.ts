import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleDarkTheme(isDark: boolean): void {
    const htmlElement = document.documentElement;

    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  isDarkModeEnabled(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}
