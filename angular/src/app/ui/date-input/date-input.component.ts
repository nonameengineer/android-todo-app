import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
})
export class DateInputComponent implements ControlValueAccessor, OnInit {
  form: FormGroup = this.fb.group({
    day: ['', [Validators.required]],
    month: ['', [Validators.required]],
    year: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  onChange: any = () => {};
  onTouch: any = () => {};

  set value(value) {
    this.onChange(value);
    this.onTouch(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
      this.writeValue(
        new Date(
          this.form.controls.year.value > 0 ? this.form.controls.year.value - 1 : 0,
          this.form.controls.month.value > 0 ? this.form.controls.month.value - 1 : 0,
          this.form.controls.day.value > 0 ? this.form.controls.day.value - 1 : 0,
          0,
          0,
          0,
          0)
      );
    });
  }
}
