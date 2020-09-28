import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputComponent } from './date-input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('DateInputComponent', () => {
  let component: DateInputComponent;
  let fixture: ComponentFixture<DateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInputComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
