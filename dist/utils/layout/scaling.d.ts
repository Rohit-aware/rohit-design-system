export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
export type DeviceForm = "phone" | "tablet" | "desktop";
export type LayoutInfo = {
    breakpoint: Breakpoint;
    deviceForm: DeviceForm;
    isFolded: boolean;
    isLandscape: boolean;
    width: number;
    height: number;
    scaleW: (size: number) => number;
    scaleH: (size: number) => number;
    moderateScale: (size: number, factor?: number) => number;
};
export type ResponsiveValue<T> = Partial<Record<Breakpoint, T>> & {
    xs: T;
};
export declare function buildLayoutInfo(): LayoutInfo;
export declare function resolveResponsive<T>(value: ResponsiveValue<T>, breakpoint: Breakpoint): T;
//# sourceMappingURL=scaling.d.ts.map