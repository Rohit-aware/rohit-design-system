import { ImageStyle, TextStyle, ViewStyle } from "react-native";
export type A11yInfo = {
    isRTL: boolean;
    reduceMotion: boolean;
    fontScale: number;
    dir: () => "ltr" | "rtl";
    rtlStyle: <T extends Record<string, unknown>>(style: T) => T;
};
export type AccessibilitySnapshot = {
    isRTL: boolean;
    reduceMotion: boolean;
    fontScale: number;
};
export declare function buildAccessibilityInfo(snapshot: AccessibilitySnapshot): A11yInfo;
export declare function readAccessibilitySnapshot(): Promise<AccessibilitySnapshot>;
export declare function platform<T extends ViewStyle | TextStyle | ImageStyle>(opts: {
    ios?: Partial<T>;
    android?: Partial<T>;
    default?: Partial<T>;
}): Partial<T>;
//# sourceMappingURL=accessibility.d.ts.map