import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { Task } from 'src/app/models/task';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('200ms',
          style({ opacity: 1}))
      ])
    ])
  ],
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
    this.soonTasks = this.tasks.filter(task => task.date < new Date().toDateString()
      && task.isFavorite === false
      && task.isArchived === false);
  }

  getPastTasks(): void {
    this.pastTasks = this.tasks.filter(task => task.date > new Date().toDateString()
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
