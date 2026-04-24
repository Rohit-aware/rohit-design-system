"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAccessibilityState = useAccessibilityState;
const react_1 = require("react");
const accessibility_1 = require("../../utils/accessibility/accessibility");
const defaultSnapshot = {
    isRTL: false,
    reduceMotion: false,
    fontScale: 1,
};
function useAccessibilityState() {
    const [a11ySnapshot, setA11ySnapshot] = (0, react_1.useState)(defaultSnapshot);
    (0, react_1.useEffect)(() => {
        (0, accessibility_1.readAccessibilitySnapshot)().then(setA11ySnapshot).catch(() => undefined);
    }, []);
    return a11ySnapshot;
}
//# sourceMappingURL=useAccessibilityState.js.map