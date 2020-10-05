import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { Colors } from '../../models/colors';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  @Output() colorSelect = new EventEmitter<string>();
  @Output() outsideClick = new EventEmitter<void>();

  readonly isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;

  readonly colors = Object.keys(Colors);

  private wasInside = false;

  @HostListener('click')
  clickInside(): void {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickOutside(): void {
    this.outsideClick.emit();
    this.wasInside = false;
  }

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onColor(color: string): void {
    this.colorSelect.emit(color);
  }
}
