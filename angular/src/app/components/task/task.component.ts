import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private tasksStorage: TasksStorageService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.task = this.tasksStorage.getTaskById(params.id);
    });
  }
}
