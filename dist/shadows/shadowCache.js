"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadowScale = getShadowScale;
const createShadowScale_1 = require("./createShadowScale");
const shadowScaleCache = new Map();
function getShadowScale(color) {
    const cached = shadowScaleCache.get(color);
    if (cached)
        return cached;
    const scale = (0, createShadowScale_1.createShadowScale)(color);
    shadowScaleCache.set(color, scale);
    return scale;
}
//# sourceMappingURL=shadowCache.js.map