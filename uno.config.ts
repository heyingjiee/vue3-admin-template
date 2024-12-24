import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  presetIcons
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx({
      baseFontSize: 4
    }),
    presetIcons()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
