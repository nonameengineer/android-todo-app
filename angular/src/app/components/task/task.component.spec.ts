import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { TaskModel } from '../../models/task.model';
import { Colors } from '../../models/colors';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let router: Router;
  let tasksStorage: TasksStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    tasksStorage = TestBed.inject(TasksStorageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.nativeElement.remove();
  });

  describe('#onCancel', () => {
    it('should navigate to home screen', () => {
      const navigateSpy = spyOn(router, 'navigate').and.stub();

      component.onCancel();

      expect(navigateSpy).toHaveBeenCalled();
    });
  });

  describe('#onDone', () => {
    it('should update task and navigate to home screen', () => {
      const navigateSpy = spyOn(router, 'navigate').and.stub();
      const updateTaskSpy = spyOn(tasksStorage, 'updateTask').and.stub();

      component.onDone(new TaskModel(
        '1',
        'task 1',
        new Date('1995-12-17T03:24:00').toDateString(),
        Colors.RED,
        false,
        false,
      ));

      expect(navigateSpy).toHaveBeenCalled();
      expect(updateTaskSpy).toHaveBeenCalled();
    });
  });

  describe('#ngOnInit', () => {
    it('should get id from url params and load task by id from storage', () => {
      const getTaskByIdSpy = spyOn(tasksStorage, 'getTaskById').and.returnValue(new TaskModel(
        '1',
        'task 1',
        new Date('1995-12-17T03:24:00').toDateString(),
        Colors.RED,
        false,
        false,
      ));

      component.ngOnInit();

      expect(component.task).toEqual(new TaskModel(
        '1',
        'task 1',
        new Date('1995-12-17T03:24:00').toDateString(),
        Colors.RED,
        false,
        false,
      ));
    });
  });
});
