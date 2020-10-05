import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TasksStorageService } from '../../services/tasks-storage/tasks-storage.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let tasksStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [NoopAnimationsModule],
      providers: [TasksStorageService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    tasksStorageService = TestBed.inject(TasksStorageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.nativeElement.remove();
  });

  describe('#ngOnInit', () => {
    let loadDataSpy;

    beforeEach(() => {
      loadDataSpy = spyOn(component, 'loadData').and.stub();
      component.ngOnInit();
    });

    it('should load data on init', () => {
      expect(loadDataSpy).toHaveBeenCalled();
      expect(loadDataSpy).toHaveBeenCalledTimes(1);
    });

    it('should update loaded data on init, when it is updated', () => {
      tasksStorageService.updated$.next();
      expect(loadDataSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('#loadData', () => {
    it('should load tasks', () => {
      const loadAllTasksSpy = spyOn(component, 'loadAllTasks').and.stub();
      const getTodaysTasksSpy = spyOn(component, 'getTodaysTasks').and.stub();
      const getFavoriteTasksSpy = spyOn(component, 'getFavoriteTasks').and.stub();
      const getSoonTasksSpy = spyOn(component, 'getSoonTasks').and.stub();
      const getPastTasksSpy = spyOn(component, 'getPastTasks').and.stub();

      component.loadData();

      expect(loadAllTasksSpy).toHaveBeenCalled();
      expect(getTodaysTasksSpy).toHaveBeenCalled();
      expect(getFavoriteTasksSpy).toHaveBeenCalled();
      expect(getSoonTasksSpy).toHaveBeenCalled();
      expect(getPastTasksSpy).toHaveBeenCalled();
    });
  });

  describe('#loadAllTasks', () => {
    it('should load tasks', () => {
      component.loadAllTasks();

      expect(component.tasks.length).toBeGreaterThan(0);
    });
  });

  describe('#getTodaysTasks', () => {
    it('should filter tasks and get todays tasks only', () => {
      fixture.detectChanges();
      component.getTodaysTasks();

      expect(component.todayTasks.length).toBeGreaterThan(0);
    });
  });

  describe('#getFavoriteTasks', () => {
    it('should filter tasks and get favorites tasks only', () => {
      fixture.detectChanges();
      component.getFavoriteTasks();

      expect(component.favoriteTasks.length).toBeGreaterThan(0);
    });
  });

  xdescribe('#getSoonTasks', () => {
    it('should filter tasks and get soon tasks only', () => {
      fixture.detectChanges();
      component.getSoonTasks();

      expect(component.soonTasks.length).toBe(0);
    });
  });

  xdescribe('#getPastTasks', () => {
    it('should filter tasks and get past tasks only', () => {
      fixture.detectChanges();
      component.getPastTasks();

      expect(component.pastTasks.length).toBe(1);
    });
  });
});
