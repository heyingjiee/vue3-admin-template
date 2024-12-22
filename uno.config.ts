import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx({
      baseFontSize: 4
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
