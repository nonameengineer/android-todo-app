import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreMenuComponent } from './more-menu.component';

describe('MoreMenuComponent', () => {
  let component: MoreMenuComponent;
  let fixture: ComponentFixture<MoreMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.nativeElement.remove();
  });

  xdescribe('#onClick', () => {
    it('should create', () => {
    });
  });

  xdescribe('#showMenu', () => {
    it('should create', () => {
    });
  });

  xdescribe('#hideMenu', () => {
    it('should create', () => {
    });
  });

  xdescribe('#onRemove', () => {
    it('should create', () => {
    });
  });

  xdescribe('#onFavorite', () => {
    it('should create', () => {
    });
  });

  xdescribe('#onMore', () => {
    it('should create', () => {
    });
  });

  xdescribe('#onRestore', () => {
    it('should create', () => {
    });
  });
});
