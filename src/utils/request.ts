import axios from 'axios'
import { ElMessage } from 'element-plus'

import router from '@/router/index'

import useUserStore from '@/stores/modules/user'

const RequestInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000
})

RequestInstance.interceptors.request.use(
  (config) => {
    // config.headers.token = useUserStore().token
    return config
  },
  (error) => {
    ElMessage({
      type: 'error',
      message: '网络不佳，请稍后重试',
      duration: 3000
    })

    return Promise.reject(error)
  }
)

RequestInstance.interceptors.response.use(
  (response) => {
    const { showError = true, data: bussiness } = response as any
    if (bussiness.code !== 0 && showError) {
      ElMessage({
        type: 'error',
        message: bussiness.msg || '业务异常'
      })
    }
    return response.data
  },
  async (error) => {
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = '登录失效'
        await useUserStore().userLogout()
        await router.replace({ path: '/login' })
        break
      case 403:
        message = '暂无权限'
        router.back()
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器错误'
        break
      default:
        message = '发生错误'
    }

    ElMessage({
      type: 'error',
      message
    })

    return Promise.reject(error)
  }
)

export default RequestInstance
