"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
const react_1 = require("react");
// Internal context stores the widest possible type at runtime.
// Typed accessors in createThemeKit restore the concrete TColors.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.ThemeContext = (0, react_1.createContext)(null);
//# sourceMappingURL=ThemeContext.js.map