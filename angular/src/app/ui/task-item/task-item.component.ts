import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() isDark: boolean;
  @Input() isActive: boolean;
  @Input() isFavorite: boolean;
  remaining: string;

  constructor() { }

  ngOnInit(): void {
  }

  onFavorite(event: any): void {
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
  }

  /**
   * Calculates remaining time of task.
   */
  onTime(event: any): void {
    event.stopPropagation();
    this.isActive = true;

    this.remaining = `Remaining ${this.task.date}...`;
  }

  onBack(event: any): void {
    event.stopPropagation();
    this.isActive = false;
  }
}
