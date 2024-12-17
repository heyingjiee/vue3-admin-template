/// <reference types="vite/client" />

// import.meta.env.xxx 的类型提示
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string //定义提示信息 数据是只读的无法被修改
}

declare module 'nprogress' {
  const nprogress: {
    start: () => void
    done: () => void
  }

  export default nprogress
}
declare module 'element-plus/dist/locale/zh-cn.mjs'
