"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = useTheme;
exports.useThemeFromContext = useThemeFromContext;
const react_1 = require("react");
const ThemeContext_1 = require("../ThemeContext");
function useTheme() {
    const ctx = (0, react_1.useContext)(ThemeContext_1.ThemeContext);
    if (!ctx)
        throw new Error("useTheme must be used inside <ThemeProvider>");
    return ctx;
}
function useThemeFromContext() {
    const ctx = (0, react_1.useContext)(ThemeContext_1.ThemeContext);
    if (!ctx)
        throw new Error("Must be used inside <ThemeProvider>");
    return ctx.theme;
}
//# sourceMappingURL=useTheme.js.map