import { Routes } from '@angular/router';
import { Box } from './components/box/box';
import { List } from './components/list/list';
import { Slidepanel } from './components/slidepanel/slidepanel';

export const routes: Routes = [
    { path: '', redirectTo: 'box', pathMatch: 'full' },
    { path: 'box', component: Box },
    { path: 'list', component: List },
    { path: 'panel', component: Slidepanel }
];
