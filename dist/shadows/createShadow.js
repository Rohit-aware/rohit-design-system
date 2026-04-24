"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShadow = createShadow;
const react_native_1 = require("react-native");
function createShadow(level, color = "#000") {
    if (level === 0) {
        return { elevation: 0 };
    }
    if (react_native_1.Platform.OS === "android") {
        return { elevation: level };
    }
    return {
        shadowColor: color,
        shadowOffset: { width: 0, height: level },
        shadowOpacity: Math.min(0.05 + level * 0.02, 0.3),
        shadowRadius: level * 1.5,
        elevation: level,
    };
}
//# sourceMappingURL=createShadow.js.map