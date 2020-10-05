import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardComponent } from './new-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';
import { TaskModel } from '../../models/task.model';
import { Colors } from '../../models/colors';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewCardComponent', () => {
  let component: NewCardComponent;
  let fixture: ComponentFixture<NewCardComponent>;
  let router: Router;
  let tasksStorage: TasksStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCardComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    router = TestBed.inject(Router);
    tasksStorage = TestBed.inject(TasksStorageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardComponent);
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
    it('should add task and navigate to home screen', () => {
      const navigateSpy = spyOn(router, 'navigate').and.stub();
      const addTaskSpy = spyOn(tasksStorage, 'addTask').and.stub();

      component.onDone(new TaskModel(
        '1',
        'task 1',
        new Date('1995-12-17T03:24:00').toDateString(),
        Colors.RED,
        false,
        false,
      ));

      expect(navigateSpy).toHaveBeenCalled();
      expect(addTaskSpy).toHaveBeenCalled();
    });
  });
});
