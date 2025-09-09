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

  items = ['Angular', 'NestJS', 'Laravel', 'Vue.js', 'React'];

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
