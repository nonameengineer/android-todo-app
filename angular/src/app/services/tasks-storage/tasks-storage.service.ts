import { Injectable } from '@angular/core';
import {Task} from '../../models/task';
import { TaskModel } from '../../models/task.model';
import { Colors } from '../../models/colors';

const TASKS_STORAGE_KEY = 'tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksStorageService {

  constructor() { }

  getTasks(): Task[] {
    const tasksFromStorage = localStorage.getItem(TASKS_STORAGE_KEY);

    if (tasksFromStorage === null) {
      return [
        new TaskModel(
          '1',
          'task 1',
          new Date('1995-12-17T03:24:00'),
          Colors.RED,
          false,
          false
        ),
        new TaskModel(
          '2',
          'task 2',
          new Date(),
          Colors.CYAN,
          false,
          false
        ),
        new TaskModel(
          '3',
          'task 3',
          new Date(),
          Colors.GREEN,
          false,
          false
        ),
        new TaskModel(
          '4',
          'task 4',
          new Date(),
          Colors.RED,
          true,
          false
        ),
        new TaskModel(
          '5',
          'task 5',
          new Date(),
          Colors.CYAN,
          true,
          false
        ),
        new TaskModel(
          '6',
          'task 6',
          new Date(),
          Colors.GREEN,
          false,
          true
        )
      ];
    }
  }
}
