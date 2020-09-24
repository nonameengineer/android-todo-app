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

  saveTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }

  getTasks(): Task[] {
    const tasksFromStorage = localStorage.getItem(TASKS_STORAGE_KEY);
    if (tasksFromStorage === null) {
      return this.getMockTasks();
    } else {
      return JSON.parse(tasksFromStorage);
    }
  }

  getTaskById(id: string): Task {
    return this.getTasks().filter(task => task.id === id)[0];
  }

  // TODO
  removeTaskById(id: string): void {
  }

  // TODO
  addToFavourites(id: string): void {
    const task = this.getTaskById(id);
    task.isFavorite = true;
  }

  // TODO
  removeFromFavourites(id: string): void {
  }

  private getMockTasks(): Task[] {
    return [
      new TaskModel(
        '1',
        'task 1',
        new Date('1995-12-17T03:24:00').toDateString(),
        Colors.RED,
        false,
        false
      ),
      new TaskModel(
        '2',
        'task 2',
        new Date().toDateString(),
        Colors.CYAN,
        false,
        false
      ),
      new TaskModel(
        '3',
        'task 3',
        new Date().toDateString(),
        Colors.GREEN,
        false,
        false
      ),
      new TaskModel(
        '4',
        'task 4',
        new Date().toDateString(),
        Colors.RED,
        true,
        false
      ),
      new TaskModel(
        '5',
        'task 5',
        new Date().toDateString(),
        Colors.CYAN,
        true,
        false
      ),
      new TaskModel(
        '6',
        'task 6',
        new Date().toDateString(),
        Colors.GREEN,
        false,
        true
      )
    ];
  }
}
