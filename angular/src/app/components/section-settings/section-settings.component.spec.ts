import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSettingsComponent } from './section-settings.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SectionSettingsComponent', () => {
  let component: SectionSettingsComponent;
  let fixture: ComponentFixture<SectionSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSettingsComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
