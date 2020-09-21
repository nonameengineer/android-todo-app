import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // By default is light theme
  isDark$ = new BehaviorSubject<boolean>(false);

  constructor() { }
}
