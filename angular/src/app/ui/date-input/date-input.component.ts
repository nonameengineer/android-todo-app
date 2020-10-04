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

  // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
  isValidDate(dateString): boolean {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
      return false;
    }

    // Parse the date parts to integers
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month === 0 || month > 12) {
      return false;
    }

    const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29;
    }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      if (!this.isValidDate(`${this.form.controls.day.value}/${this.form.controls.month.value}/${this.form.controls.year.value}`)) {
        this.form.setErrors({ incorrect: true });
      } else {
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
      }
    });
  }
}
