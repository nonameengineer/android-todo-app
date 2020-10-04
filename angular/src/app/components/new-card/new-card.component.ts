import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { Task } from 'src/app/models/task';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(50px)'
        }),
        animate('200ms ease-out',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          }))
      ])
    ])
  ]
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
