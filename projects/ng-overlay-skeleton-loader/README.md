# Ng Overlay Skeleton Loader
A lightweight and customizable skeleton loading library for Angular.
Supports both a standalone component `<ng-overlay-skeleton-loader>` and a structural directive `*skeleton` to easily add shimmering placeholders while your data is loading.

---
## ✨ Features

* 🔥 Simple, drop-in skeleton loading animation
* 🎨 Customizable width, height, classes, and overlay mode
* 📦 Provides both component & directive for flexible usage
* 🪶 Lightweight – no external dependencies
* ✅ Works with Angular 19+

---

## 📦 Installation

```bash
npm install ng-overlay-skeleton-loader
```

## 🚀 Usage

### 1. Use the Component

```html
<!-- Basic skeleton -->
<ng-overlay-skeleton-loader width="200px" height="20px"></ng-overlay-skeleton-loader>

<!-- Overlay skeleton -->
<div style="position: relative; height: 50px;">
  <ng-overlay-skeleton-loader [isOverlay]="true"></ng-overlay-skeleton-loader>
  <span>Real content will appear here</span>
</div>
```

---

### 2. Use the Directive

```html
<!-- Show skeletons while loading -->
<div *skeleton="isLoading;
                skeletonRepeat: 3;
                skeletonHeight: '25px';
                skeletonWidth: '80%';
                skeletonClassName: 'rounded-md'">
  <p>This is the actual content once loading is false</p>
</div>
```

---


---

## ⚙️ API

### `<ng-overlay-skeleton-loader>` Component Inputs

| Input       | Type      | Default | Description                         |
| ----------- | --------- | ------- | ----------------------------------- |
| `width`     | `string?` | `100%`  | Width of skeleton block             |
| `height`    | `string?` | `20px`  | Height of skeleton block            |
| `className` | `string?` | `-`     | Custom CSS class                    |
| `isOverlay` | `boolean` | `false` | Overlay mode (absolute positioning) |

---

### `*skeleton` Directive Inputs

| Input               | Type      | Default | Description                  |
| ------------------- | --------- | ------- | ---------------------------- |
| `skeleton`          | `boolean` | `false` | Toggle loading state         |
| `skeletonRepeat`    | `number`  | `1`     | Number of skeleton blocks    |
| `skeletonIsOverlay` | `boolean` | `true`  | Overlay skeletons on content |
| `skeletonWidth`     | `string?` | `100%`  | Skeleton width               |
| `skeletonHeight`    | `string?` | `20px`  | Skeleton height              |
| `skeletonClassName` | `string?` | `-`     | Custom CSS class             |

---



# Development Guide

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

---

## Building the Library

To build the library, run:

```bash
ng build ng-overlay-skeleton-loader
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

---

## Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:

   ```bash
   cd dist/ng-overlay-skeleton-loader
   ```

2. Run the `npm publish` command to publish your library to the npm registry:

   ```bash
   npm publish --access public
   ```

---

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

---

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

---

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## GitHub Repository

[https://github.com/ebrahim-salehipanah/ng-overlay-skeleton-loader.git](https://github.com/ebrahim-salehipanah/ng-overlay-skeleton-loader.git)

---

## 📜 License

MIT © 2025 Ebrahim Salehipanah