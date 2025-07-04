import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slidepanel',
  imports: [CommonModule],
  templateUrl: './slidepanel.html',
  styleUrl: './slidepanel.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
})
export class Slidepanel {
  show = false;
  toggle() {
    this.show = !this.show;
  }

}
