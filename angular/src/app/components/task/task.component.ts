import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { ThemeService } from '../../services/theme/theme.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
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
export class TaskComponent implements OnInit {
  task: Task;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private themeService: ThemeService,
    private tasksStorage: TasksStorageService
  ) { }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  onDone(task: Task): void {
    this.tasksStorage.updateTask(task);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.task = this.tasksStorage.getTaskById(params.id);
    });
  }
}
