import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,DemoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  isLoading = true;

  cards = [
    { id: 1, title: 'Dashboard Card 1', text: 'This card shows content once loading is finished.' },
    { id: 2, title: 'Dashboard Card 2', text: 'Skeleton placeholders improve user experience.' },
    {
      id: 3,
      title: 'Dashboard Card 3',
      text: 'You can customize width, height, and border radius.',
    },
    { id: 4, title: 'Dashboard Card 1', text: 'This card shows content once loading is finished.' },
    { id: 5, title: 'Dashboard Card 2', text: 'Skeleton placeholders improve user experience.' },
    {
      id: 6,
      title: 'Dashboard Card 3',
      text: 'You can customize width, height, and border radius.',
    },
    { id: 7, title: 'Dashboard Card 1', text: 'This card shows content once loading is finished.' },
    { id: 8, title: 'Dashboard Card 2', text: 'Skeleton placeholders improve user experience.' },
    {
      id: 9,
      title: 'Dashboard Card 3',
      text: 'You can customize width, height, and border radius.',
    },
    {
      id: 10,
      title: 'Dashboard Card 1',
      text: 'This card shows content once loading is finished.',
    },
    { id: 11, title: 'Dashboard Card 2', text: 'Skeleton placeholders improve user experience.' },
    {
      id: 12,
      title: 'Dashboard Card 3',
      text: 'You can customize width, height, and border radius.',
    },
  ];
  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
