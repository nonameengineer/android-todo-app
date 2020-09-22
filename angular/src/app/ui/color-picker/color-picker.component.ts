import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { Colors } from '../../models/colors';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  @Output() colorSelect = new EventEmitter<string>();
  @Output() outsideClick = new EventEmitter<void>();

  @Input() isDark: boolean;

  readonly colors = Object.keys(Colors);

  private wasInside = false;

  @HostListener('click')
  clickInside(): void {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickOutside(): void {
    if (!this.wasInside) {
      this.outsideClick.emit();
    }
    this.wasInside = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onColor(color: string): void {
    this.colorSelect.emit(color);
  }
}
