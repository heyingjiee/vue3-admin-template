import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { viteMockServe } from 'vite-plugin-mock'
import UnoCSS from 'unocss/vite'

const pathSrc = fileURLToPath(new URL('./types-dts', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('启动命令：', command)

  //加载根目录下的环境变量文件 (vite.config文件中不能通过import.meta.env获取环境变量)
  const env = loadEnv(mode, process.cwd())
  console.log('当前环境变量：')
  console.table(env)

  return {
    plugins: [
      vue(),
      // 自动导入插件
      AutoImport({
        resolvers: [
          // 自动导入element组件
          ElementPlusResolver()
        ],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts')
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(pathSrc, 'components.d.ts')
      }),

      // mock插件
      viteMockServe({
        mockPath: 'mock', //放置mock文件的目录
        enable: command === 'serve' //启用mock
      }),

      // svg 插件
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      }),

      // unocss 插件
      UnoCSS()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
    // 预处理器less
    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       additionalData: '@import "./src/styles/variable.less";'
    //     }
    //   }
    // }
    // 代理
    // server: {
    //   proxy: {
    //     [env.VITE_BASE_URL]: {
    //       //需要匹配到前缀
    //       target: '', //替换匹配到前缀
    //       changeOrigin: true //开启跨域
    //     }
    //   }
    // }
  }
})
