import {
  Directive,
  Input,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { SkeltonLoadingComponent } from '../component/ng-overlay-skeleton-loader.component';

@Directive({ selector: '[skeleton]' })
export class SkeletonLoadingDirective implements OnChanges {
  @Input('skeleton') isLoading = false;
  @Input('skeletonRepeat') size = 1;
  @Input('skeletonIsOverlay') isOverlay = true;
  @Input('skeletonWidth') width?: string;
  @Input('skeletonHeight') height?: string;
  @Input('skeletonClassName') className?: string;
  @Input('skeletonBorderRadius') borderRadius?: string; // ✅ new input

  private wrapperDiv?: HTMLElement;

  constructor(
    private tpl: TemplateRef<any>,
    private renderer: Renderer2,
    private vcr: ViewContainerRef,
    private host: ElementRef<HTMLElement>
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.vcr.clear();
    const hostEl = this.host.nativeElement;

    if (this.wrapperDiv) {
      this.renderer.insertBefore(this.wrapperDiv.parentNode, hostEl, this.wrapperDiv);
      this.renderer.removeChild(this.wrapperDiv.parentNode, this.wrapperDiv);
      this.wrapperDiv = undefined;
    }

    this.vcr.clear();

    if (this.isLoading && this.isOverlay) {
      const wrapper = this.renderer.createElement('div');
      this.renderer.setStyle(wrapper, 'position', 'relative');
      this.renderer.setStyle(wrapper, 'overflow', 'hidden');
      if (this.height) this.renderer.setStyle(wrapper, 'height', this.height);

      const parent = hostEl.parentNode;
      this.renderer.insertBefore(parent, wrapper, hostEl);
      this.renderer.removeChild(parent, hostEl);

      for (let i = 0; i < this.size; i++) {
        const ref = this.vcr.createComponent(SkeltonLoadingComponent);
        Object.assign(ref.instance, {
          width: this.width,
          height: this.height,
          className: this.className,
          isOverlay: true,
          borderRadius: this.borderRadius ?? '10px', // ✅ pass border radius
        });
        this.renderer.appendChild(wrapper, ref.location.nativeElement);
      }
    } else if (this.isLoading && !this.isOverlay) {
      for (let i = 0; i < this.size; i++) {
        const ref = this.vcr.createComponent(SkeltonLoadingComponent);
        Object.assign(ref.instance, {
          width: this.width,
          height: this.height,
          className: this.className,
          isOverlay: false,
          borderRadius: this.borderRadius ?? '10px', // ✅ pass border radius
        });
        this.renderer.appendChild(hostEl, ref.location.nativeElement);
      }
    } else {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
