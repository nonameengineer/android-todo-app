import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent implements OnInit {
  @Input() title: string;
  @Input() isDark: boolean;
  @Input() isActive: boolean;
  @Input() isFavorite: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.isActive) {
      this.title = '2 days remaining...';
    }
  }
}
