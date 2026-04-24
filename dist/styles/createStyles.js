"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDynamicStyles = exports.createStyles = void 0;
exports.makeCreateStyles = makeCreateStyles;
exports.makeCreateDynamicStyles = makeCreateDynamicStyles;
const react_1 = require("react");
const ThemeContext_1 = require("../provider/ThemeContext");
const staticCache = new WeakMap();
const dynamicCache = new WeakMap();
function makeCreateStyles(getTheme) {
    return function createStyles(factory) {
        return function useStyles() {
            const theme = getTheme();
            let factoryMap = staticCache.get(factory);
            if (!factoryMap) {
                factoryMap = new WeakMap();
                staticCache.set(factory, factoryMap);
            }
            const cached = factoryMap.get(theme);
            if (cached)
                return cached;
            const styles = factory(theme);
            factoryMap.set(theme, styles);
            return styles;
        };
    };
}
function makeCreateDynamicStyles(getTheme) {
    return function createDynamicStyles(factory) {
        return function useDynamicStyles(...args) {
            const theme = getTheme();
            let factoryMap = dynamicCache.get(factory);
            if (!factoryMap) {
                factoryMap = new WeakMap();
                dynamicCache.set(factory, factoryMap);
            }
            let themeMap = factoryMap.get(theme);
            if (!themeMap) {
                themeMap = new Map();
                factoryMap.set(theme, themeMap);
            }
            const key = JSON.stringify(args);
            const cached = themeMap.get(key);
            if (cached)
                return cached;
            const styles = factory(theme, ...args);
            themeMap.set(key, styles);
            return styles;
        };
    };
}
function getThemeFromContext() {
    const ctx = (0, react_1.useContext)(ThemeContext_1.ThemeContext);
    if (!ctx)
        throw new Error("createStyles hooks must be used inside <ThemeProvider>");
    return ctx.theme;
}
exports.createStyles = makeCreateStyles(getThemeFromContext);
exports.createDynamicStyles = makeCreateDynamicStyles(getThemeFromContext);
//# sourceMappingURL=createStyles.js.map