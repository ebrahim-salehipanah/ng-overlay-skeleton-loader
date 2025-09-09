import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoadingDirective } from 'ng-overlay-skeleton-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SkeletonLoadingDirective],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  isLoading = true;

  cards = [
    { id: 1,title: 'Dashboard Card 1', text: 'This card shows content once loading is finished.' },
    { id: 2,title: 'Dashboard Card 2', text: 'Skeleton placeholders improve user experience.' },
    { id: 3,title: 'Dashboard Card 3', text: 'You can customize width, height, and border radius.' },
  ];
toggleLoading(){
  this.isLoading = !this.isLoading;
}
}
