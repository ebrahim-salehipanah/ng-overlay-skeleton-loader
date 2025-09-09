import * as i0 from '@angular/core';
import { ElementRef, OnChanges, TemplateRef, Renderer2, ViewContainerRef, SimpleChanges } from '@angular/core';

declare class SkeltonLoadingComponent {
    private host;
    width?: string;
    height?: string;
    className?: string;
    isOverlay: boolean;
    borderRadius: string;
    constructor(host: ElementRef<HTMLElement>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkeltonLoadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SkeltonLoadingComponent, "ng-overlay-skeleton-loader", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "className": { "alias": "className"; "required": false; }; "isOverlay": { "alias": "isOverlay"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; }, {}, never, never, true, never>;
}

declare class SkeletonLoadingDirective implements OnChanges {
    private tpl;
    private renderer;
    private vcr;
    private host;
    isLoading: boolean;
    size: number;
    isOverlay: boolean;
    width?: string;
    height?: string;
    className?: string;
    borderRadius?: string;
    private wrapperDiv?;
    constructor(tpl: TemplateRef<any>, renderer: Renderer2, vcr: ViewContainerRef, host: ElementRef<HTMLElement>);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SkeletonLoadingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SkeletonLoadingDirective, "[skeleton]", never, { "isLoading": { "alias": "skeleton"; "required": false; }; "size": { "alias": "skeletonRepeat"; "required": false; }; "isOverlay": { "alias": "skeletonIsOverlay"; "required": false; }; "width": { "alias": "skeletonWidth"; "required": false; }; "height": { "alias": "skeletonHeight"; "required": false; }; "className": { "alias": "skeletonClassName"; "required": false; }; "borderRadius": { "alias": "skeletonBorderRadius"; "required": false; }; }, {}, never, never, true, never>;
}

export { SkeletonLoadingDirective, SkeltonLoadingComponent };
