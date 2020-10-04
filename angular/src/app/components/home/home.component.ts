import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { Task } from 'src/app/models/task';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('enterHome', [
      transition(':enter', [
        style({ opacity: 0}),  // initial
        animate('0.5s',
          style({ opacity: 1}))  // final
      ]),
      transition(':leave', [
        style({ height: '*', 'padding-top': '*', 'padding-bottom': '*', opacity: 1}),  // initial
        animate('0.5s',
          style({ height: '0px', 'padding-top': '0', 'padding-bottom': '0', opacity: 0}))  // final
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  readonly isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;
  tasks: Task[];
  todayTasks: Task[];
  favoriteTasks: Task[];
  soonTasks: Task[];
  pastTasks: Task[];

  lists = {
    today: true,
    favourites: true,
    soon: true,
    past: true
  };

  constructor(
    private themeService: ThemeService,
    private tasksStorage: TasksStorageService,
  ) { }

  loadAllTasks(): void {
    this.tasks = this.tasksStorage.getTasks();
  }

  getTodaysTasks(): void {
    this.todayTasks = this.tasks.filter(task => task.date === new Date().toDateString()
      && task.isFavorite === false
      && task.isArchived === false);
  }

  getFavoriteTasks(): void {
    this.favoriteTasks = this.tasks.filter(task => task.isFavorite === true && task.isArchived === false);
  }

  getSoonTasks(): void {
    this.soonTasks = this.tasks.filter(task => task.date !== new Date().toDateString()
      && task.isFavorite === false
      && task.isArchived === false);
  }

  getPastTasks(): void {
    this.pastTasks = this.tasks.filter(task => task.date !== new Date().toDateString()
      && task.isFavorite === false
      && task.isArchived === false);
  }

  loadData(): void {
    this.loadAllTasks();
    this.getTodaysTasks();
    this.getFavoriteTasks();
    this.getSoonTasks();
    this.getPastTasks();
  }

  ngOnInit(): void {
    this.loadData();
    this.tasksStorage.updated$.subscribe(_ => this.loadData());
  }
}
