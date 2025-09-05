import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ng-overlay-skeleton-loader',
  template: ``,
  styles: [
    `
      :host {
        background: rgb(239, 241, 246) no-repeat;
        border-radius: 10px;
        display: block;
      }
      :host::before {
        content: '';
        animation: skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.4),
          rgba(255, 255, 255, 0)
        );
      }
      @keyframes skeleton-animation {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `,
  ],
})
export class SkeltonLoadingComponent {
  @Input() width?: string;
  @Input() height?: string;
  @Input() className?: string;
  @Input() isOverlay = false;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(this.className);
    }

    if (this.isOverlay) {
      Object.assign(host.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        width: this.width ?? '100%',
        height: this.height ?? '20px',
        zIndex: '1',
      });
    } else {
      Object.assign(host.style, {
        width: this.width ?? '100%',
        height: this.height ?? '20px',
      });
    }
  }
}
