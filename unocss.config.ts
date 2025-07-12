import type { Theme } from "@unocss/preset-wind4";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";
// 自定义主题，变量到style/main.css中定义
const selfTheme: Theme = {
  // 这里的颜色，虽然写了--primary 但在main.css中使用记得写成--color-primary
  colors: {
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))',
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))',
    },
    destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))',
    },
    muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))',
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))',
    },
    popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))',
    },
    card: {
      DEFAULT: 'hsl(var(--card))',
      foreground: 'hsl(var(--card-foreground))',
    },
  },
  radius: {
    xl: 'calc(var(--radius) + 4px)',
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)',
  }

};

export default defineConfig({
  shortcuts: [
    ["btn", "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"],
    ["icon-btn", "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600"],
    [/^flex-?(col)?-(start|end|center|baseline|stretch)-?(start|end|center|between|around|evenly|left|right)?$/, ([, col, items, justify]) => {
      const cls = ['flex']
      if (col === 'col') {
        cls.push('flex-col')
      }
      if (items === 'center' && !justify) {
        cls.push('items-center')
        cls.push('justify-center')
      }
      else {
        cls.push(`items-${items}`)
        if (justify) {
          cls.push(`justify-${justify}`)
        }
      }
      return cls.join(' ')
    }],
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),

    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono"
      },
      processors: createLocalFontProcessor()
    })
  ],
  // theme是完全覆盖unocss带的默认主题，一般使用extendTheme，theme可以不写。
  /*   theme: {
  }, */
  // 继承默认主题，添加自定义主题去覆盖默认主题。定义主题使用css变量，这样跟换css 变量实现主题切换。
  extendTheme: (defaultTheme: Theme["defaults"]) => ({
    ...defaultTheme, // 默认主题
    colors: {
      ...defaultTheme?.colors, // 保留默认颜色
      ...selfTheme.colors // 添加自定义颜色
    }
  }),

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ]
});
