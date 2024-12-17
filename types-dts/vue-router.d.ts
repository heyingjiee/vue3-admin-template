/// <reference types="vue-router" />

// vue-router的自定义类型
declare module 'vue-router' {
  // 路由元信息
  interface RouteMeta {
    title?: string
    icon?: string
    hiddenMenuItem: boolean
  }
}
export {}
