"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = ThemeProvider;
const react_1 = __importStar(require("react"));
const ThemeContext_1 = require("./ThemeContext");
const useThemeMode_1 = require("./hooks/useThemeMode");
const useLayoutState_1 = require("./hooks/useLayoutState");
const useAccessibilityState_1 = require("./hooks/useAccessibilityState");
const useComposedTheme_1 = require("./hooks/useComposedTheme");
function ThemeProvider({ projectTheme, initialMode, followSystem = false, children, }) {
    const { mode, toggleTheme } = (0, useThemeMode_1.useThemeMode)(initialMode, followSystem);
    const layout = (0, useLayoutState_1.useLayoutState)();
    const a11ySnapshot = (0, useAccessibilityState_1.useAccessibilityState)();
    const baseTheme = mode === "dark" ? projectTheme.dark : projectTheme.light;
    const theme = (0, useComposedTheme_1.useComposedTheme)(baseTheme, layout, a11ySnapshot);
    const value = (0, react_1.useMemo)(() => ({ theme, mode, toggleTheme }), [theme, mode, toggleTheme]);
    return (<ThemeContext_1.ThemeContext.Provider value={value}>
      {children}
    </ThemeContext_1.ThemeContext.Provider>);
}
//# sourceMappingURL=ThemeProvider.js.map