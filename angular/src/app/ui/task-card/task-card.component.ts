import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colors } from '../../models/colors';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../../models/task';
import { ThemeService } from '../../services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();
  @Output() accepted = new EventEmitter<Task>();

  @Input() task: Task;
  @Input() isDark: boolean;

  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  isColorPickerActive = false;

  form: FormGroup = this.fb.group({
    id: [''],
    title: [''],
    date: [new Date()],
    color: [Colors.RED],
    isFavorite: [false],
    isArchived: [false]
  });

  constructor(
    private fb: FormBuilder,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    if (this.task) {
      this.form.setValue(this.task);
      console.log(this.task);
    }
    this.form.valueChanges.subscribe(x => console.log(x));
  }

  onCancel(): void {
    this.closed.emit();
  }

  onDone(): void {
    this.accepted.emit(this.form.value as Task);
    // this.tasksStorage.saveTask(this.form.value as Task);
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
    this.form.controls.color.setValue(Colors[color]);
    this.isColorPickerActive = false;
  }
}
