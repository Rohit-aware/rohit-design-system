"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjectTheme = createProjectTheme;
const spacing_1 = require("../tokens/spacing");
const radius_1 = require("../tokens/radius");
const colors_1 = require("../tokens/colors");
const shadowCache_1 = require("../shadows/shadowCache");
const buildColorScaleMap_1 = require("../colors/buildColorScaleMap");
const themeCache_1 = require("./themeCache");
function createProjectTheme(config) {
    const cached = themeCache_1.themeCache.get(config);
    if (cached) {
        return cached;
    }
    const spacing = { ...spacing_1.defaultSpacing, ...config.spacing };
    const radius = { ...radius_1.defaultRadius, ...config.radius };
    const base = (0, shadowCache_1.getShadowScale)("#000");
    const variants = {};
    if (config.shadows !== undefined) {
        for (const key of Object.keys(config.shadows)) {
            const color = config.shadows[key];
            if (color !== undefined) {
                variants[key] = (0, shadowCache_1.getShadowScale)(color);
            }
        }
    }
    const shadows = { base, ...variants };
    const mergedLight = {
        ...colors_1.baseLightColors,
        ...config.lightColors,
    };
    const mergedDark = {
        ...colors_1.baseDarkColors,
        ...config.darkColors,
    };
    const lightColors = (0, buildColorScaleMap_1.buildColorScaleMap)(mergedLight);
    const darkColors = (0, buildColorScaleMap_1.buildColorScaleMap)(mergedDark);
    const light = {
        colors: lightColors,
        mode: "light",
        spacing,
        radius,
        shadows,
    };
    const dark = {
        colors: darkColors,
        mode: "dark",
        spacing,
        radius,
        shadows,
    };
    const result = { light, dark };
    themeCache_1.themeCache.set(config, result);
    return result;
}
//# sourceMappingURL=createProjectTheme.js.map