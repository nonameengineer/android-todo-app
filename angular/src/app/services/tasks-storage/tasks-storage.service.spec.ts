import { TestBed } from '@angular/core/testing';

import { TasksStorageService } from './tasks-storage.service';

describe('TasksStorageService', () => {
  let service: TasksStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksStorageService);
  });

  xdescribe('#addTask', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  xdescribe('#getTaskById', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  xdescribe('#updateTasks', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  xdescribe('#updateTask', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  xdescribe('#removeTask', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
});
