import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTitleComponent implements OnInit {
  @Input() title: string;
  @Input() clickable = false;
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }
}
