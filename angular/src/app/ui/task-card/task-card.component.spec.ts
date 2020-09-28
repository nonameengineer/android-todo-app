import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardComponent } from './task-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DateInputComponent } from '../date-input/date-input.component';

describe('TaskCardComponent', () => {
  let component: TaskCardComponent;
  let fixture: ComponentFixture<TaskCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCardComponent, DateInputComponent ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
