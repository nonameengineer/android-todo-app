import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCardComponent {

  constructor(
    private router: Router,
    private tasksStorage: TasksStorageService,
  ) { }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  onDone(task: Task): void {
    this.tasksStorage.addTask(task as Task);
    this.router.navigate(['/']);
  }
}
