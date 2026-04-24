"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAccessibilityInfo = buildAccessibilityInfo;
exports.readAccessibilitySnapshot = readAccessibilitySnapshot;
exports.platform = platform;
const react_native_1 = require("react-native");
function buildAccessibilityInfo(snapshot) {
    const { isRTL, reduceMotion, fontScale } = snapshot;
    const dir = () => (isRTL ? "rtl" : "ltr");
    function rtlStyle(style) {
        if (!isRTL)
            return style;
        const s = { ...style };
        if ("marginLeft" in s && "marginRight" in s) {
            const tmp = s["marginLeft"];
            s["marginLeft"] = s["marginRight"];
            s["marginRight"] = tmp;
        }
        if ("paddingLeft" in s && "paddingRight" in s) {
            const tmp = s["paddingLeft"];
            s["paddingLeft"] = s["paddingRight"];
            s["paddingRight"] = tmp;
        }
        if ("left" in s && "right" in s) {
            const tmp = s["left"];
            s["left"] = s["right"];
            s["right"] = tmp;
        }
        return s;
    }
    return { isRTL, reduceMotion, fontScale, dir, rtlStyle };
}
async function readAccessibilitySnapshot() {
    const reduceMotion = await react_native_1.AccessibilityInfo.isReduceMotionEnabled();
    return {
        isRTL: react_native_1.I18nManager.isRTL,
        reduceMotion,
        fontScale: react_native_1.PixelRatio.getFontScale(),
    };
}
function platform(opts) {
    return ((react_native_1.Platform.OS === 'ios' ? opts.ios : undefined) ??
        (react_native_1.Platform.OS === 'android' ? opts.android : undefined) ??
        opts.default ??
        {});
}
//# sourceMappingURL=accessibility.js.map