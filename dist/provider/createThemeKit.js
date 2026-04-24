"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThemeKit = createThemeKit;
exports.createThemeHook = createThemeKit;
const react_1 = require("react");
const ThemeContext_1 = require("./ThemeContext");
const createStyles_1 = require("../styles/createStyles");
function createThemeKit(_projectTheme) {
    function useTypedTheme() {
        const ctx = (0, react_1.useContext)(ThemeContext_1.ThemeContext);
        if (!ctx)
            throw new Error("useTheme must be used inside <ThemeProvider>");
        return ctx;
    }
    function getTheme() {
        const ctx = (0, react_1.useContext)(ThemeContext_1.ThemeContext);
        if (!ctx)
            throw new Error("createStyles hooks must be used inside <ThemeProvider>");
        return ctx.theme;
    }
    return {
        useTheme: useTypedTheme,
        createStyles: (0, createStyles_1.makeCreateStyles)(getTheme),
        createDynamicStyles: (0, createStyles_1.makeCreateDynamicStyles)(getTheme),
    };
}
//# sourceMappingURL=createThemeKit.js.map