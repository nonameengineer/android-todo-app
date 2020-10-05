import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponent } from './task-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { Colors } from '../../models/colors';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    component.task = new TaskModel(
      '1',
      'task 1',
      new Date('1995-12-17T03:24:00').toDateString(),
      Colors.RED,
      false,
      false,
    );
    fixture.detectChanges();
  });

  describe('#onFavorite', () => {
    it('should update task `isFavorite` property to be true', () => {
      component.onFavorite();
      expect(component.task.isFavorite).toBeTrue();
    });
  });

  describe('#onRemove', () => {
    it('should update task `isArchived` property to be true', () => {
      component.onRemove();
      expect(component.task.isArchived).toBeTrue();
    });
  });

  describe('#onRestore', () => {
    it('should update task `isArchived` property to be false', () => {
      component.task.isArchived = true;
      component.onRestore();
      expect(component.task.isArchived).toBeFalse();
    });
  });

  describe('#onTime', () => {
    it('should set value of remaining property to task date', () => {
      component.onTime(new Event('click'));
      expect(component.remaining).toBe(`Remaining ${component.task.date}...`);
    });

    it('should set `isActive` to true', () => {
      component.onTime(new Event('click'));
      expect(component.isActive).toBeTrue();
    });
  });

  describe('#onBack', () => {
    it('should set `isActive` to false', () => {
      component.onBack(new Event('click'));
      expect(component.isActive).toBeFalse();
    });
  });
});
