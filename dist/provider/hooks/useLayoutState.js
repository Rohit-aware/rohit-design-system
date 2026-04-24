"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutState = useLayoutState;
const react_1 = require("react");
const react_native_1 = require("react-native");
const scaling_1 = require("../../utils/layout/scaling");
function useLayoutState() {
    const [layout, setLayout] = (0, react_1.useState)(scaling_1.buildLayoutInfo);
    (0, react_1.useEffect)(() => {
        const sub = react_native_1.Dimensions.addEventListener("change", () => {
            const next = (0, scaling_1.buildLayoutInfo)();
            setLayout((prev) => {
                if (prev.breakpoint === next.breakpoint &&
                    prev.isLandscape === next.isLandscape &&
                    prev.isFolded === next.isFolded) {
                    return prev;
                }
                return next;
            });
        });
        return () => sub.remove();
    }, []);
    return layout;
}
//# sourceMappingURL=useLayoutState.js.map