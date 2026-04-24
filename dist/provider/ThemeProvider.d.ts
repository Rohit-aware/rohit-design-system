import React from "react";
import type { ColorScaleMap, ProjectTheme } from "../types";
export type ThemeProviderProps<TColors extends ColorScaleMap<string>> = {
    projectTheme: ProjectTheme<TColors>;
    initialMode?: "light" | "dark";
    followSystem?: boolean;
    children: React.ReactNode;
};
export declare function ThemeProvider<TColors extends ColorScaleMap<string>>({ projectTheme, initialMode, followSystem, children, }: ThemeProviderProps<TColors>): React.ReactElement;
//# sourceMappingURL=ThemeProvider.d.ts.map