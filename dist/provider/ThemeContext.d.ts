import type { ColorScaleMap, Theme } from "../types";
export type ThemeContextValue<TColors extends ColorScaleMap<string>> = {
    theme: Theme<TColors>;
    mode: "light" | "dark";
    toggleTheme: () => void;
};
export declare const ThemeContext: any;
//# sourceMappingURL=ThemeContext.d.ts.map