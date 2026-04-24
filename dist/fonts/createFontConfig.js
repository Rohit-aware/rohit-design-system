"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFontConfig = createFontConfig;
const VARIANT_WEIGHT_MAP = {
    thin: "100",
    extralight: "200",
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
};
function inferWeightFromName(variantName) {
    return VARIANT_WEIGHT_MAP[variantName.toLowerCase()];
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function normalizeVariant(input, variantName) {
    if (typeof input === "string") {
        return {
            postscriptName: input,
            fontStyle: "normal",
            fontWeight: inferWeightFromName(variantName),
        };
    }
    return {
        postscriptName: input.name,
        fontStyle: input.style ?? "normal",
        fontWeight: input.weight ?? inferWeightFromName(variantName),
    };
}
function buildStaticValue(norm, fontSize) {
    const value = {
        fontFamily: norm.postscriptName,
        fontStyle: norm.fontStyle,
        fontSize,
    };
    if (norm.fontWeight !== undefined) {
        value.fontWeight = norm.fontWeight;
    }
    return value;
}
const fontConfigCache = new WeakMap();
const dynamicFnCache = new Map();
function createFontConfig(config) {
    const cached = fontConfigCache.get(config);
    if (cached)
        return cached;
    const result = {};
    for (const familyName of Object.keys(config.families)) {
        const family = config.families[familyName];
        if (!family)
            continue;
        for (const variantName of Object.keys(family.variants)) {
            const variantInput = family.variants[variantName];
            if (variantInput === undefined)
                continue;
            const norm = normalizeVariant(variantInput, variantName);
            const capVariant = capitalize(variantName);
            for (const sizeName of Object.keys(config.sizes)) {
                const fontSize = config.sizes[sizeName];
                if (fontSize === undefined)
                    continue;
                const staticKey = `${familyName}${capVariant}${capitalize(sizeName)}`;
                result[staticKey] = buildStaticValue(norm, fontSize);
            }
            const dynamicKey = `_${familyName}${capVariant}`;
            const cacheKey = `${norm.postscriptName}__${norm.fontStyle}__${norm.fontWeight ?? ""}`;
            let dynFn = dynamicFnCache.get(cacheKey);
            if (!dynFn) {
                const captured = norm;
                dynFn = (size) => {
                    const v = {
                        fontFamily: captured.postscriptName,
                        fontStyle: captured.fontStyle,
                        fontSize: size,
                    };
                    if (captured.fontWeight !== undefined) {
                        v.fontWeight = captured.fontWeight;
                    }
                    return v;
                };
                dynamicFnCache.set(cacheKey, dynFn);
            }
            result[dynamicKey] = dynFn;
        }
    }
    fontConfigCache.set(config, result);
    return result;
}
//# sourceMappingURL=createFontConfig.js.map