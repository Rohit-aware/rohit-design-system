"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShadowScale = createShadowScale;
const shadows_1 = require("../tokens/shadows");
const createShadow_1 = require("./createShadow");
let cachedShadowScale = null;
function createShadowScale(color = "#000") {
    if (color === "#000" && cachedShadowScale)
        return cachedShadowScale;
    const scale = Object.freeze({
        none: (0, createShadow_1.createShadow)(shadows_1.shadowLevels.none, color),
        xs: (0, createShadow_1.createShadow)(shadows_1.shadowLevels.xs, color),
        sm: (0, createShadow_1.createShadow)(shadows_1.shadowLevels.sm, color),
        md: (0, createShadow_1.createShadow)(shadows_1.shadowLevels.md, color),
        lg: (0, createShadow_1.createShadow)(shadows_1.shadowLevels.lg, color),
        xl: (0, createShadow_1.createShadow)(shadows_1.shadowLevels.xl, color),
    });
    if (color === "#000")
        cachedShadowScale = scale;
    return scale;
}
//# sourceMappingURL=createShadowScale.js.map