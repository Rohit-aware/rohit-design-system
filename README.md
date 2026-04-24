# 🎨 @rn-lab/design-system

A production-grade, highly scalable, and fully type-safe React Native Design System SDK. Built to enforce consistent typography, colors, and layouts across your applications with zero friction.

## ✨ Features

- **100% Type-Safe:** Built with TypeScript, providing rich autocomplete for all your theme tokens, colors, and fonts.
- **Dynamic Theming:** Seamless Light and Dark mode switching out of the box.
- **Powerful Typography:** Generate static and dynamic font styles dynamically without writing boilerplate.
- **Responsive Layouts:** Built-in breakpoint system (`xs`, `md`, `lg`) tailored for cross-device scaling.
- **Accessibility Ready:** First-class support for RTL (Right-to-Left) and layout snapshotting.
- **Performance Optimized:** Uses memoized style creators for fast, jank-free rendering.

---

## 📦 Installation

This package is designed as an internal workspace dependency or published NPM module.

```sh
npm install @rn-lab/design-system
# or
yarn add @rn-lab/design-system
```

_(Note: Requires `react >= 18.0.0` and `react-native >= 0.72.0`)_

---

## 🛠 Core Utilities Explained

The design system exposes several specialized utilities to architect your app's presentation layer seamlessly.

### 1. `createProjectTheme`

Defines your global design language, including semantic colors, spacing, radius, and shadows. It automatically constructs and maps your light and dark mode tokens.

```tsx
import { createProjectTheme } from "@rn-lab/design-system";

export const projectTheme = createProjectTheme({
  lightColors: {
    background: "#FFFFFF",
    surface: "#F5F5F5",
    primary: "#0A0A0A",
    text: "#111111",
    accent: "#FF4D00",
  },
  darkColors: {
    background: "#0A0A0A",
    surface: "#1A1A1A",
    primary: "#FFFFFF",
    text: "#F5F5F5",
    accent: "#FF6B35",
  },
});
```

### 2. `createFontConfig`

Generates a structured, fully-typed typography configuration. It supports static variants (e.g., `InterBoldMd`) and dynamic functions for custom sizing requirements (e.g., `_InterBold(24)`).

```tsx
import { createFontConfig } from "@rn-lab/design-system";

export const fontConfig = createFontConfig({
  families: {
    Inter: {
      variants: {
        Regular: "Inter-Regular",
        SemiBold: "Inter-SemiBold",
        Bold: "Inter-Bold",
      },
    },
  },
  sizes: {
    xs: 11,
    sm: 13,
    md: 16,
    lg: 20,
    xl: 24,
  },
});
```

### 3. `createThemeKit`

Binds your initialized `projectTheme` to React Native hooks, ensuring strongly-typed access across your entire project.

```tsx
import { createThemeKit } from "@rn-lab/design-system";

export const { useTheme, createStyles, createDynamicStyles } =
  createThemeKit(projectTheme);
```

### 4. `ThemeProvider`

The root provider that watches system theme changes, overrides, and supplies your theme context down the React tree.

```tsx
import { ThemeProvider } from "@rn-lab/design-system";

export function App() {
  return (
    <ThemeProvider projectTheme={projectTheme} followSystem>
      <AppNavigation />
    </ThemeProvider>
  );
}
```

---

## 💻 Usage Patterns

Once configured, use your generated hooks to style components effortlessly while retaining strict TypeScript validations.

### Static Styling (Recommended)

`createStyles` is the preferred way to generate styles that depend on the theme, executing only when the theme changes (saving valuable render cycles).

```tsx
const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    ...theme.shadows.base.md, // Pre-configured drop shadows
  },
  title: {
    color: theme.colors.text,
    ...fontConfig.InterBoldMd, // Type-safe typography token
  },
}));

function DemoCard() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Design System</Text>
    </View>
  );
}
```

### Dynamic Styling

When component styles must react to local props or state, use `createDynamicStyles`.

```tsx
const useDynamicStyles = createDynamicStyles((theme, size: number) => ({
  customText: {
    color: theme.colors.accent,
    ...fontConfig._InterBold(size), // Invoke dynamic font sizing
  },
}));

function DynamicText({ size = 18 }) {
  const styles = useDynamicStyles(size);
  return <Text style={styles.customText}>I adapt to props!</Text>;
}
```

### Direct Theme Access & Responsiveness

Extract `theme` for responsive viewport checks, layout parameters, or RTL capabilities inline.

```tsx
function ActionArea() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ padding: theme.responsive({ xs: 16, md: 24, lg: 32 }) }}>
      <Text>Current Mode: {theme.mode}</Text>
      <Text>Layout Direction: {theme.accessibility.dir()}</Text>

      <TouchableOpacity onPress={toggleTheme}>
        <Text>Toggle Appearance</Text>
      </TouchableOpacity>
    </View>
  );
}
```

---

## ⚡️ Performance & Optimization

This design system is built from the ground up to guarantee 60 FPS in React Native by minimizing bridge traffic and preventing unnecessary re-renders:

- **Memoized Style Creators:** `createStyles` caches the generated stylesheet based on the active theme. Your components will never recreate styles on every render unless the theme mode (light/dark) explicitly changes.
- **Reference Equality:** Hook outputs (`useTheme()`) return stable object references, preventing your child components from re-rendering if they use `React.memo`.
- **Zero-Cost Abstractions:** There are no heavy runtime UI component wrappers. This SDK gives you raw `StyleSheet.create` performance while injecting dynamic theme values effortlessly.
- **Lazy Evaluation:** Dynamic styling via `createDynamicStyles` only recalculates when specific dependencies (like custom prop values) change, heavily optimizing complex list items and interactive components.

---

## 🧠 Architecture Philosophy

- **Separation of Concerns:** Themes, Fonts, and Kits are instantiated modularly to prevent heavy bundle sizes and circular dependencies.
- **Frictionless DX:** Strict auto-completion ensures developers never mistype a color, spacing tier, or font variant.
- **Scalability First:** Add new color keys or font scales to the configuration, and your app's definitions will infer and update globally.
