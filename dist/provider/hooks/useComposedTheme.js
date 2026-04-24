"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComposedTheme = useComposedTheme;
const react_1 = require("react");
const accessibility_1 = require("../../utils/accessibility/accessibility");
const scaling_1 = require("../../utils/layout/scaling");
function useComposedTheme(baseTheme, layout, a11ySnapshot) {
    const accessibility = (0, react_1.useMemo)(() => (0, accessibility_1.buildAccessibilityInfo)(a11ySnapshot), [a11ySnapshot]);
    return (0, react_1.useMemo)(() => {
        const responsive = (values) => (0, scaling_1.resolveResponsive)(values, layout.breakpoint);
        return { ...baseTheme, layout, accessibility, responsive };
    }, [baseTheme, layout, accessibility]);
}
//# sourceMappingURL=useComposedTheme.js.map