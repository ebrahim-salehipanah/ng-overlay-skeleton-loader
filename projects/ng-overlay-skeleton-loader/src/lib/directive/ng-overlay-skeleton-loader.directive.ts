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

    // cleanup old wrapper if it exists
    if (this.wrapperDiv) {
      this.renderer.insertBefore(this.wrapperDiv.parentNode, hostEl, this.wrapperDiv);
      this.renderer.removeChild(this.wrapperDiv.parentNode, this.wrapperDiv);
      this.wrapperDiv = undefined;
    }

    // clear skeletons
    this.vcr.clear();

    if (this.isLoading && this.isOverlay) {
      // ✅ create wrapper div (replacement)
      const wrapper = this.renderer.createElement('div');
      this.renderer.addClass(wrapper, 'relative');
      this.renderer.addClass(wrapper, 'overflow-hidden');

      if (this.height) {
        this.renderer.setStyle(wrapper, 'height', this.height);
      }

      const parent = hostEl.parentNode;

      // insert wrapper where host used to be
      this.renderer.insertBefore(parent, wrapper, hostEl);

      // move host element inside wrapper
      this.renderer.removeChild(parent, hostEl);
      // this.renderer.appendChild(wrapper, wrapper);

      // inject skeleton(s) inside wrapper
      for (let i = 0; i < this.size; i++) {
        const ref = this.vcr.createComponent(SkeltonLoadingComponent);
        Object.assign(ref.instance, {
          width: this.width,
          height: this.height,
          className: this.className,
          isOverlay: true,
        });
        this.renderer.appendChild(wrapper, ref.location.nativeElement);
      }

      // this.wrapperDiv = wrapper;
    } else if (this.isLoading && !this.isOverlay) {
      // Non-overlay: just inject skeleton into host
      for (let i = 0; i < this.size; i++) {
        const ref = this.vcr.createComponent(SkeltonLoadingComponent);
        Object.assign(ref.instance, {
          width: this.width,
          height: this.height,
          className: this.className,
          isOverlay: false,
        });
        this.renderer.appendChild(hostEl, ref.location.nativeElement);
      }
    } else {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
