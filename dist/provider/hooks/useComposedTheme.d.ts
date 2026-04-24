import type { ColorScaleMap, Theme } from "../../types";
import type { LayoutInfo, AccessibilitySnapshot } from "../../utils";
export declare function useComposedTheme<TColors extends ColorScaleMap<string>>(baseTheme: Omit<Theme<TColors>, "layout" | "accessibility" | "responsive">, layout: LayoutInfo, a11ySnapshot: AccessibilitySnapshot): Theme<TColors>;
//# sourceMappingURL=useComposedTheme.d.ts.map