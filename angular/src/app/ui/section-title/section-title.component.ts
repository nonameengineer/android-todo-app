import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTitleComponent implements OnInit {
  @Input() title: string;
  @Input() isDark: boolean;
  @Input() clickable = false;

  constructor() { }

  ngOnInit(): void {
  }
}
