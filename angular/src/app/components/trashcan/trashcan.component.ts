import { Component, OnInit } from '@angular/core';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-trashcan',
  templateUrl: './trashcan.component.html',
  styleUrls: ['./trashcan.component.scss']
})
export class TrashcanComponent implements OnInit {
  tasks: Task[];

  constructor(
    private tasksStorage: TasksStorageService
  ) { }

  ngOnInit(): void {
    this.tasks = this.tasksStorage.getTasks().filter(task => task.isArchived);
  }
}
