import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;
  tasks: Task[];
  todayTasks: Task[];
  favoriteTasks: Task[];
  soonTasks: Task[];

  constructor(
    private themeService: ThemeService,
    private tasksStorage: TasksStorageService
  ) { }

  ngOnInit(): void {
    this.tasks = this.tasksStorage.getTasks();
    this.todayTasks = this.tasks.filter(task => task.date === new Date().toDateString()
      && task.isFavorite === false
      && task.isArchived === false);
    this.favoriteTasks = this.tasks.filter(task => task.isFavorite === true && task.isArchived === false);
    this.soonTasks = this.tasks.filter(task => task.date !== new Date().toDateString()
      && task.isFavorite === false
      && task.isArchived === false);
  }
}
