import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
  }

}
