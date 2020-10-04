import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashcanComponent } from './trashcan.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';

describe('TrashcanComponent', () => {
  let component: TrashcanComponent;
  let fixture: ComponentFixture<TrashcanComponent>;
  let tasksStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashcanComponent ],
      imports: [NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    tasksStorageService = TestBed.inject(TasksStorageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashcanComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.nativeElement.remove();
  });

  xdescribe('#loadTasks', () => {
    let getTasksSpy;

    beforeEach(() => {
      getTasksSpy = spyOn(tasksStorageService, 'getTasks').and.stub();
      component.loadTasks();
    });

    it('should load tasks', () => {
      expect(getTasksSpy).toHaveBeenCalled();
    });
  });

  describe('#ngOnInit', () => {
    let loadTasksSpy;

    beforeEach(() => {
      loadTasksSpy = spyOn(component, 'loadTasks').and.stub();
      component.ngOnInit();
    });

    it('should load data on init', () => {
      expect(loadTasksSpy).toHaveBeenCalled();
      expect(loadTasksSpy).toHaveBeenCalledTimes(1);
    });

    it('should update loaded data on init, when it is updated', () => {
      tasksStorageService.updated$.next();
      expect(loadTasksSpy).toHaveBeenCalledTimes(2);
    });
  });
});
