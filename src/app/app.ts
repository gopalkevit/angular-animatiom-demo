import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { List } from './components/list/list';
import { Box } from './components/box/box';
import { Slidepanel } from './components/slidepanel/slidepanel';

@Component({
  selector: 'app-root',
  imports: [List, Box, Slidepanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'animation-demo-angular';
}
