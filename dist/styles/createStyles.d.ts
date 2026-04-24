import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import type { ColorScaleMap, Theme } from "../types";
export type RNStyle = ViewStyle | TextStyle | ImageStyle;
export type StyleValue = RNStyle | ((...args: never[]) => RNStyle);
export declare function makeCreateStyles<TTheme extends Theme<ColorScaleMap<string>>>(getTheme: () => TTheme): <T extends Record<string, StyleValue>>(factory: (theme: TTheme) => T) => () => T;
export declare function makeCreateDynamicStyles<TTheme extends Theme<ColorScaleMap<string>>>(getTheme: () => TTheme): <TArgs extends readonly unknown[], T extends Record<string, StyleValue>>(factory: (theme: TTheme, ...args: TArgs) => T) => (...args: TArgs) => T;
export declare const createStyles: <T extends Record<string, StyleValue>>(factory: (theme: Theme<ColorScaleMap<string>>) => T) => () => T;
export declare const createDynamicStyles: <TArgs extends readonly unknown[], T extends Record<string, StyleValue>>(factory: (theme: Theme<ColorScaleMap<string>>, ...args: TArgs) => T) => (...args: TArgs) => T;
//# sourceMappingURL=createStyles.d.ts.map