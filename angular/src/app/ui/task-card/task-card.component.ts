import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Colors } from '../../models/colors';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme/theme.service';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent implements OnInit {
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;
  isColorPickerActive = false;
  color = Colors.RED;

  form: FormGroup = this.fb.group({
    id: [''],
    title: [''],
    date: [new Date()],
    color: [Colors.RED],
    isFavorite: [false],
    isArchived: [false]
  });

  constructor(
    private themeService: ThemeService,
    private tasksStorage: TasksStorageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(x => console.log(x));
  }

  onCancel(): void {
    // this.router.navigate(['/']);
  }

  onDone(): void {
    this.form.controls.color.setValue(this.color);
    this.tasksStorage.saveTask(this.form.value as Task);
    // this.router.navigate(['/']);
  }

  onDate(): void {
    console.log('Input date');
  }

  onColorPicker(event): void {
    event.stopPropagation();
    this.isColorPickerActive = true;
  }

  onCloseColorPicker(): void {
    this.isColorPickerActive = false;
  }

  onColorSelect(color: string): void {
    this.color = Colors[color];
    this.form.controls.color.setValue(this.color);
    this.isColorPickerActive = false;
  }
}
