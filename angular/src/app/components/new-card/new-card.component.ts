import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  constructor(
    private router: Router
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

  onColorPicker(): void {
    console.log('Set color');
  }
}
