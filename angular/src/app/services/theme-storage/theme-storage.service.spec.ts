import { TestBed } from '@angular/core/testing';

import { ThemeStorageService } from './theme-storage.service';

describe('ThemeStorageService', () => {
  let service: ThemeStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeStorageService);
  });

  xdescribe('#saveIsDarkTheme', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  xdescribe('#getIsDarkTheme', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
});
