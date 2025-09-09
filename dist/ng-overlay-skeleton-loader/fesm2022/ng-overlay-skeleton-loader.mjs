import * as i0 from '@angular/core';
import { Input, Component, Directive } from '@angular/core';

class SkeltonLoadingComponent {
    host;
    width;
    height;
    className;
    isOverlay = false;
    borderRadius = '10px'; // ✅ new input
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        const host = this.host.nativeElement;
        if (this.className) {
            host.classList.add(this.className);
        }
        Object.assign(host.style, {
            width: this.width ?? '100%',
            height: this.height ?? '20px',
            borderRadius: this.borderRadius, // ✅ apply border radius
        });
        if (this.isOverlay) {
            Object.assign(host.style, {
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: '1',
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.4", ngImport: i0, type: SkeltonLoadingComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.4", type: SkeltonLoadingComponent, isStandalone: true, selector: "ng-overlay-skeleton-loader", inputs: { width: "width", height: "height", className: "className", isOverlay: "isOverlay", borderRadius: "borderRadius" }, ngImport: i0, template: ``, isInline: true, styles: [":host{background:#eff1f6 no-repeat;display:block;position:relative}:host:before{content:\"\";animation:skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1;background:linear-gradient(90deg,#fff0,#fff6,#fff0)}@keyframes skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.4", ngImport: i0, type: SkeltonLoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ng-overlay-skeleton-loader', template: ``, styles: [":host{background:#eff1f6 no-repeat;display:block;position:relative}:host:before{content:\"\";animation:skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1;background:linear-gradient(90deg,#fff0,#fff6,#fff0)}@keyframes skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], className: [{
                type: Input
            }], isOverlay: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }] } });

class SkeletonLoadingDirective {
    tpl;
    renderer;
    vcr;
    host;
    isLoading = false;
    size = 1;
    isOverlay = true;
    width;
    height;
    className;
    borderRadius; // ✅ new input
    wrapperDiv;
    constructor(tpl, renderer, vcr, host) {
        this.tpl = tpl;
        this.renderer = renderer;
        this.vcr = vcr;
        this.host = host;
    }
    ngOnChanges(changes) {
        const hostEl = this.host.nativeElement;
        // Remove old wrapper if exists
        if (this.wrapperDiv) {
            const parent = this.wrapperDiv.parentNode;
            this.renderer.insertBefore(parent, hostEl, this.wrapperDiv);
            this.renderer.removeChild(parent, this.wrapperDiv);
            this.wrapperDiv = undefined;
        }
        this.vcr.clear();
        if (this.isLoading) {
            if (this.isOverlay) {
                const wrapper = this.renderer.createElement('div');
                this.wrapperDiv = wrapper; // ✅ remember wrapper
                this.renderer.setStyle(wrapper, 'position', 'relative');
                this.renderer.setStyle(wrapper, 'overflow', 'hidden');
                if (this.height)
                    this.renderer.setStyle(wrapper, 'height', this.height);
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
                        borderRadius: this.borderRadius ?? '10px',
                    });
                    this.renderer.appendChild(wrapper, ref.location.nativeElement);
                }
            }
            else {
                for (let i = 0; i < this.size; i++) {
                    const ref = this.vcr.createComponent(SkeltonLoadingComponent);
                    Object.assign(ref.instance, {
                        width: this.width,
                        height: this.height,
                        className: this.className,
                        isOverlay: false,
                        borderRadius: this.borderRadius ?? '10px',
                    });
                    this.renderer.appendChild(hostEl, ref.location.nativeElement);
                }
            }
        }
        else {
            this.vcr.createEmbeddedView(this.tpl);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.4", ngImport: i0, type: SkeletonLoadingDirective, deps: [{ token: i0.TemplateRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.2.4", type: SkeletonLoadingDirective, isStandalone: true, selector: "[skeleton]", inputs: { isLoading: ["skeleton", "isLoading"], size: ["skeletonRepeat", "size"], isOverlay: ["skeletonIsOverlay", "isOverlay"], width: ["skeletonWidth", "width"], height: ["skeletonHeight", "height"], className: ["skeletonClassName", "className"], borderRadius: ["skeletonBorderRadius", "borderRadius"] }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.4", ngImport: i0, type: SkeletonLoadingDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[skeleton]' }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.ElementRef }], propDecorators: { isLoading: [{
                type: Input,
                args: ['skeleton']
            }], size: [{
                type: Input,
                args: ['skeletonRepeat']
            }], isOverlay: [{
                type: Input,
                args: ['skeletonIsOverlay']
            }], width: [{
                type: Input,
                args: ['skeletonWidth']
            }], height: [{
                type: Input,
                args: ['skeletonHeight']
            }], className: [{
                type: Input,
                args: ['skeletonClassName']
            }], borderRadius: [{
                type: Input,
                args: ['skeletonBorderRadius']
            }] } });

/*
 * Public API Surface of ng-overlay-skeleton-loader
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SkeletonLoadingDirective, SkeltonLoadingComponent };
//# sourceMappingURL=ng-overlay-skeleton-loader.mjs.map
