import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardComponent } from './new-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('NewCardComponent', () => {
  let component: NewCardComponent;
  let fixture: ComponentFixture<NewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
