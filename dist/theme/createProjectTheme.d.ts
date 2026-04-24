import type { ColorMap, FinalColors, ProjectTheme, ProjectThemeConfig } from "../types";
export declare function createProjectTheme<TUser extends ColorMap, TDark extends {
    [K in keyof FinalColors<TUser>]: string;
}, TShadowKeys extends string = never>(config: ProjectThemeConfig<TUser, TDark, TShadowKeys>): ProjectTheme<FinalColors<TUser>, TShadowKeys>;
//# sourceMappingURL=createProjectTheme.d.ts.map