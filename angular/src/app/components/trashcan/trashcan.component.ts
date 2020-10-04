import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { Task } from 'src/app/models/task';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-trashcan',
  templateUrl: './trashcan.component.html',
  styleUrls: ['./trashcan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('200ms',
          style({ opacity: 1}))
      ])
    ])
  ]
})
export class TrashcanComponent implements OnInit {
  tasks: Task[];

  constructor(
    private tasksStorage: TasksStorageService
  ) { }

  loadTasks(): void {
    this.tasks = this.tasksStorage.getTasks().filter(task => task.isArchived);
  }

  onClearAll(): void {
    this.tasks.map(task => {
      this.tasksStorage.removeTask(task);
    });
  }

  onRestoreAll(): void {
    this.tasks.map(task => {
      task.isArchived = false;
      this.tasksStorage.removeTask(task);
    });
  }

  ngOnInit(): void {
    this.loadTasks();
    this.tasksStorage.updated$.subscribe(_ => this.loadTasks());
  }
}
