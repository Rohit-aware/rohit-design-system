"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeMode = useThemeMode;
const react_1 = require("react");
const react_native_1 = require("react-native");
function getSystemMode() {
    return react_native_1.Appearance.getColorScheme() === "dark" ? "dark" : "light";
}
// Module-level singleton — survives component re-mounts (rotation, fold/unfold)
let persistedMode = null;
let isManualOverride = false;
function useThemeMode(initialMode, followSystem) {
    const [mode, setMode] = (0, react_1.useState)(() => {
        if (persistedMode !== null)
            return persistedMode;
        const resolved = initialMode ?? (followSystem ? getSystemMode() : "light");
        persistedMode = resolved;
        return resolved;
    });
    const followSystemRef = (0, react_1.useRef)(followSystem);
    followSystemRef.current = followSystem;
    (0, react_1.useEffect)(() => {
        if (!followSystem)
            return;
        const sub = react_native_1.Appearance.addChangeListener(({ colorScheme }) => {
            if (!isManualOverride && followSystemRef.current) {
                const next = colorScheme === "dark" ? "dark" : "light";
                persistedMode = next;
                setMode(next);
            }
        });
        return () => sub.remove();
    }, [followSystem]);
    const toggleTheme = (0, react_1.useCallback)(() => {
        isManualOverride = true;
        setMode((prev) => {
            const next = prev === "light" ? "dark" : "light";
            persistedMode = next;
            return next;
        });
    }, []);
    return { mode, toggleTheme };
}
//# sourceMappingURL=useThemeMode.js.map