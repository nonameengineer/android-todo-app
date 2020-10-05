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
  readonly isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  @Output() closed = new EventEmitter<void>();
  @Output() accepted = new EventEmitter<Task>();

  @Input() task: Task;
  @Input() isDark: boolean;

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
    }
  }

  onCancel(): void {
    this.closed.emit();
  }

  onDone(): void {
    this.accepted.emit(this.form.value as Task);
  }

  onDate(): void {
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
