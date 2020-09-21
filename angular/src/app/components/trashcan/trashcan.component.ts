import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-trashcan',
  templateUrl: './trashcan.component.html',
  styleUrls: ['./trashcan.component.scss']
})
export class TrashcanComponent implements OnInit {
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  constructor(
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
  }

}
