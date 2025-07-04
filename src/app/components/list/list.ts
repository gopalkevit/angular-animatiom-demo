import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
  animations: [
    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-10px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})
export class List {
  items = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
