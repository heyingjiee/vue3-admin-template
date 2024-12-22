import SvgIcons from '@/components/SvgIcons.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'

const allGlobalComponents = { SvgIcons, ...ElementPlusIconsVue }

export default {
  install(app: App) {
    for (const [key, component] of Object.entries(allGlobalComponents)) {
      // app.component 挂载全局组件
      app.component(key, component)
    }
  }
}
