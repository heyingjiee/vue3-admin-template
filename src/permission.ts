import router from '@/router/index'

// 路由切换进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 在vue文件中使用useUserStore会隐式传入pinia（在main.ts中app.use(pinia)，已经将pinia注入到了vue全局对象上）
// 在ts文件中使用useUserStore必须保证调用时pinia已被注入
// 需要在main.ts中引入这个文件，否则这块代码不会执行。切换路由时，只有下面的拦截器部分会执行
import useUserStore from '@/stores/modules/user'

router.beforeEach(async (to, from, next) => {
  // 进度条
  nprogress.start()

  // 网页标题
  document.title = '后台管理系统 - ' + to.meta.title

  // userStore
  const userStore = useUserStore()

  // 登录拦截
  const token = userStore.token

  if (token) {
    // token存在
    if (to.path === '/login') {
      next({ path: '/' }) // 这里跳转/,会再次触发路由守卫，进入下面else判断
    } else {
      debugger
      if (!userStore.userInfo) {
        //用户信息不存在，重新获取
        try {
          await userStore.getUserInfoHandler(token)
          // 重新获取成功，放行
          next()
        } catch (err) {
          console.log('err -->', err)
          // 获取用户信息失败（网络请求失败或者是业务失败，例如：用户封禁、token过期）
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      } else {
        //用户信息存在，放行
        next()
      }
    }
  } else {
    //未登录，且跳转非登录页，重定向到登录页
    if (to.path !== '/login') {
      next({ path: '/login', query: { redirect: to.path } })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  nprogress.done()
})
