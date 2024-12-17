// 全局样式
import '@/styles/index.less'

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' // element plus支持中文
import 'element-plus/theme-chalk/dark/css-vars.css' //切换暗夜模式

// unocss
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

// vue相关
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores/index'
import router from './router'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})

// vite-plugin-svg-icons 插件
import 'virtual:svg-icons-register'

// 注册插件 文件必须导出一个包含install方法的对象
import globalComponent from '@/components/index' // 用来自动将component下的组件文件注册为全局组件
app.use(globalComponent)

// 这里调用路由守卫
import './permission'

app.mount('#app')
