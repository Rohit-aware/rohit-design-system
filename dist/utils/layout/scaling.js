"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLayoutInfo = buildLayoutInfo;
exports.resolveResponsive = resolveResponsive;
const react_native_1 = require("react-native");
const BREAKPOINTS = {
    xs: 0,
    sm: 360,
    md: 480,
    lg: 768,
    xl: 1024,
};
function classifyBreakpoint(width) {
    if (width >= BREAKPOINTS.xl)
        return "xl";
    if (width >= BREAKPOINTS.lg)
        return "lg";
    if (width >= BREAKPOINTS.md)
        return "md";
    if (width >= BREAKPOINTS.sm)
        return "sm";
    return "xs";
}
function classifyDeviceForm(width, height) {
    const larger = Math.max(width, height);
    if (larger >= 1024)
        return "desktop";
    if (larger >= 768)
        return "tablet";
    return "phone";
}
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;
function buildLayoutInfo() {
    const { width, height } = react_native_1.Dimensions.get("window");
    const breakpoint = classifyBreakpoint(width);
    const deviceForm = classifyDeviceForm(width, height);
    const isLandscape = width > height;
    const isFolded = deviceForm === "tablet" && Math.min(width, height) < 360;
    const scaleW = (size) => react_native_1.PixelRatio.roundToNearestPixel((width / BASE_WIDTH) * size);
    const scaleH = (size) => react_native_1.PixelRatio.roundToNearestPixel((height / BASE_HEIGHT) * size);
    const moderateScale = (size, factor = 0.5) => react_native_1.PixelRatio.roundToNearestPixel(size + (scaleW(size) - size) * factor);
    return { breakpoint, deviceForm, isFolded, isLandscape, width, height, scaleW, scaleH, moderateScale };
}
function resolveResponsive(value, breakpoint) {
    const order = ["xl", "lg", "md", "sm", "xs"];
    const idx = order.indexOf(breakpoint);
    for (let i = idx; i < order.length; i++) {
        const bp = order[i];
        if (bp !== undefined && bp in value) {
            return value[bp];
        }
    }
    return value.xs;
}
//# sourceMappingURL=scaling.js.map