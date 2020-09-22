import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme/theme.service';
import { BehaviorSubject } from 'rxjs';
import { Colors } from '../../models/colors';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCardComponent implements OnInit {
  isDark$: BehaviorSubject<boolean> = this.themeService.isDark$;
  isColorPickerActive = false;
  borderColor = Colors.RED;

  constructor(
    private router: Router,
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  onDone(): void {
    this.router.navigate(['/']);
  }

  onDate(): void {
    console.log('Input date');
  }

  onColorPicker(event): void {
    event.stopPropagation();
    this.isColorPickerActive = true;
  }

  onCloseColorPicker(): void {
    this.isColorPickerActive = false;
  }

  onColorSelect(color: string): void {
    this.borderColor = Colors[color];
    this.isColorPickerActive = false;
    console.log(this.isColorPickerActive);
  }
}
