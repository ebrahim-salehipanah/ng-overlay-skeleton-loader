import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoadingDirective, SkeltonLoadingComponent } from 'ng-overlay-skeleton-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SkeletonLoadingDirective],
  template: `
<!-- Skeleton Directive List Example -->
<ul
  *skeleton="isLoading;width: '100%'; height: '18px';className: 'mb-3'"
  class="divide-y divide-gray-200 border rounded p-4"
>
  <li *ngFor="let item of items" class="py-2">
    {{ item }}
  </li>
</ul>

<!-- Skeleton Directive Overlay Card Example -->
<div
  *skeleton="isLoading;width: '100%';height: '150px'"
  class="border rounded-lg p-4 relative bg-white shadow"
>
  <h3 class="text-lg font-bold text-gray-800">Dashboard Card</h3>
  <p class="text-gray-600 mt-2">
    This is a card that shows content once loading is finished.
  </p>
  <button
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
  >
    View Details
  </button>
</div>

  `,
  styles: [`
    .rounded-full {
      border-radius: 9999px;
    }
    .mb-3 {
      margin-bottom: 0.75rem;
    }
  `],
})
export class App {
  isLoading = true;

  items = ['Angular', 'NestJS', 'Laravel', 'Vue.js', 'React'];

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
