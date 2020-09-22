import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private themeService: ThemeService,
    private tasksStorage: TasksStorageService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.task = this.tasksStorage.getTaskById(params.id);
    });
  }
}
