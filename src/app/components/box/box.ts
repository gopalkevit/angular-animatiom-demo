import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-box',
  imports: [CommonModule],
  templateUrl: './box.html',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('600ms ease-in-out')),
    ])
  ],
  styleUrl: './box.css'
})
export class Box {
  isVisible = true;
  toggle() {
    this.isVisible = !this.isVisible;
  }
}
