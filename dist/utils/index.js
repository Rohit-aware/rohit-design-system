"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.platform = exports.readAccessibilitySnapshot = exports.buildAccessibilityInfo = exports.resolveResponsive = exports.buildLayoutInfo = void 0;
var scaling_1 = require("./layout/scaling");
Object.defineProperty(exports, "buildLayoutInfo", { enumerable: true, get: function () { return scaling_1.buildLayoutInfo; } });
Object.defineProperty(exports, "resolveResponsive", { enumerable: true, get: function () { return scaling_1.resolveResponsive; } });
var accessibility_1 = require("./accessibility/accessibility");
Object.defineProperty(exports, "buildAccessibilityInfo", { enumerable: true, get: function () { return accessibility_1.buildAccessibilityInfo; } });
Object.defineProperty(exports, "readAccessibilitySnapshot", { enumerable: true, get: function () { return accessibility_1.readAccessibilitySnapshot; } });
Object.defineProperty(exports, "platform", { enumerable: true, get: function () { return accessibility_1.platform; } });
//# sourceMappingURL=index.js.map