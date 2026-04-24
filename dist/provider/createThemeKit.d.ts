import type { StyleValue } from "../styles";
import type { ThemeContextValue } from "./ThemeContext";
import type { ColorScaleMap, Theme, ProjectTheme } from "../types";
export type ThemeKit<TTheme extends Theme<ColorScaleMap<string>>> = {
    useTheme: () => ThemeContextValue<TTheme["colors"]>;
    createStyles: <T extends Record<string, StyleValue>>(factory: (theme: TTheme) => T) => () => T;
    createDynamicStyles: <TArgs extends readonly unknown[], T extends Record<string, StyleValue>>(factory: (theme: TTheme, ...args: TArgs) => T) => (...args: TArgs) => T;
};
export declare function createThemeKit<TColors extends ColorScaleMap<string>, TShadowKeys extends string = never>(_projectTheme: ProjectTheme<TColors, TShadowKeys>): ThemeKit<Theme<TColors, TShadowKeys>>;
export { createThemeKit as createThemeHook };
export type { ThemeKit as BoundThemeKit };
//# sourceMappingURL=createThemeKit.d.ts.map