import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Colors } from '../../models/colors';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent implements OnInit {
  @Input() title: string;
  @Input() color = Colors.RED;
  @Input() isDark: boolean;
  @Input() isActive: boolean;
  @Input() isFavorite: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.isActive) {
      this.title = '2 days remaining...';
    }
  }

  onFavorite(event: any): void {
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
  }

  onTime(event: any): void {
    event.stopPropagation();
    this.isActive = true;
  }

  onBack(event: any): void {
    event.stopPropagation();
    this.isActive = false;
  }
}
