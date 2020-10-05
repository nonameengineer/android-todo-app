import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardComponent } from './task-card.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { Colors } from '../../models/colors';
import { TaskCardModule } from './task-card.module';

fdescribe('TaskCardComponent', () => {
  let component: TaskCardComponent;
  let fixture: ComponentFixture<TaskCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TaskCardModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    component.task = new TaskModel(
      '1',
      'task 1',
      new Date('1995-12-17T03:24:00').toDateString(),
      Colors.RED,
      false,
      false,
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.nativeElement.remove();
  });

  describe('#onCancel', () => {
    it('should emit closed event', () => {
      const emitSpy = spyOn(component.closed, 'emit');
      component.onCancel();
      expect(emitSpy).toHaveBeenCalled();
    });
  });

  describe('#onDone', () => {
    it('should emit accepted event', () => {
      const emitSpy = spyOn(component.accepted, 'emit');
      component.onDone();
      expect(emitSpy).toHaveBeenCalled();
    });
  });

  xdescribe('#onDate', () => {
  });

  describe('#onColorPicker', () => {
    it('should show color picker', () => {
      component.onColorPicker(new Event('click'));
      expect(component.isColorPickerActive).toBeTrue();
    });
  });

  describe('#onCloseColorPicker', () => {
    it('should hide color picker', () => {
      component.onCloseColorPicker();
      expect(component.isColorPickerActive).toBeFalse();
    });
  });

  describe('#onColorSelect', () => {
    it('should set color', () => {
      component.onColorSelect(Colors.GREEN);
      expect(component.form.controls.color.value).toBe(Colors.GREEN);
    });

    it('should hide color picker', () => {
      component.onColorSelect(Colors.GREEN);
      expect(component.isColorPickerActive).toBeFalse();
    });
  });

  describe('#ngOnInit', () => {
    it('should set form value if task is defined', () => {
      const setValueSpy = spyOn(component.form, 'setValue').and.stub();
      component.ngOnInit();
      expect(setValueSpy).toHaveBeenCalled();
    });
  });
});
