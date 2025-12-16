import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';
import { SkeletonLoadingDirective, SkeltonLoadingComponent } from 'ng-overlay-skeleton-loader';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, SkeletonLoadingDirective, SkeltonLoadingComponent],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  isLoading = true;
  showAdvanced = false;
  skeletonConfig = {
    width: '100%',
    height: '20px',
    borderRadius: '8px',
    background: '#e0e0e0',
    animation: true,
    delay: 0,
  };

  copied = false;

  // Example data
  cards = [
    { id: 1, title: 'User Profile', icon: '👤' },
    { id: 2, title: 'Statistics', icon: '📊' },
    { id: 3, title: 'Settings', icon: '⚙️' },
    { id: 4, title: 'Analytics', icon: '📈' },
  ];

  // Code snippets
  installationCode = `npm install ng-skeleton-loader`;

  importCode = `
import { SkeletonLoadingDirective, SkeltonLoadingComponent } from 'ng-overlay-skeleton-loader';

@Component({
  imports: [
    SkeletonModule
  ]
})
export class AppComponent { }`;

  basicUsageCode = `<div *skeleton="isLoading; width: '100%'; height: '20px'">
  Content goes here
</div>`;

  advancedUsageCode = `<div 
  *skeleton="
    isLoading;
    width: '200px';
    height: '40px';
    borderRadius: '20px';
  ">
  Custom Button
</div>`;

  componentUsageCode = `<skeleton-loader
  [width]="'300px'"
  [height]="'200px'"
  [borderRadius]="'12px'"
  [background]="'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)'">
</skeleton-loader>`;

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    // Auto-toggle for demo purposes
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  toggleLoading(): void {
    this.isLoading = !this.isLoading;
  }

  copyToClipboard(text: string): void {
    this.clipboard.copy(text);
    this.copied = true;
    setTimeout(() => (this.copied = false), 2000);
  }

  resetConfig(): void {
    this.skeletonConfig = {
      width: '100%',
      height: '20px',
      borderRadius: '8px',
      background: '#e0e0e0',
      animation: true,
      delay: 0,
    };
  }
}
