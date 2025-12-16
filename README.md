# Ng Overlay Skeleton Loader

A lightweight Angular directive to add customizable skeleton loading states to your components.

## Installation

```bash
npm install ng-overlay-skeleton-loader
```

## Example
See Example in [here](https://ebrahim-salehipanah.github.io/ng-overlay-skeleton-loader/).

## Usage

Import the directive directly into your standalone component:

```ts
import { Component } from '@angular/core';
import { SkeletonLoaderDirective } from 'ng-overlay-skeleton-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SkeletonLoaderDirective],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isLoading = true;
}
```

### Basic Example

```html
  <div
    class="py-2"
    *skeleton="isLoading; width: '100%'; height: '18px'; className: 'mb-3'"
  >
    loading ...
  </div>

```

## Options

* `width` – Width of the skeleton (default: `'100%'`).
* `height` – Height of the skeleton (default: `'16px'`).
* `repeat` – Number of skeleton items to render (default: `1`).
* `borderRadius` – Border radius of the skeleton (default: `'4px'`).
* `className` – Custom classes for styling.

## License

MIT © 2025
