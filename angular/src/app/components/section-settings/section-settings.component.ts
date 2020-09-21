import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section-settings',
  templateUrl: './section-settings.component.html',
  styleUrls: ['./section-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionSettingsComponent implements OnInit {
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;
  title;

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.title = params.title;
    });
  }

}
