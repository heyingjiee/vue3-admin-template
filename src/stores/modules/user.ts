import { defineStore } from 'pinia'
import { login, getUserInfo, loginOut } from '@/api/user'
import type { loginForm, getUserInfoResponseData } from '@/types/user'
import { ref } from 'vue'
import constantRoute from '@/router/routes'

import type { Ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

/**
 * 获取token
 * 没有token字段时，返回null
 */
function GET_TOKEN(): string | null {
  return localStorage.getItem('TOKEN')
}

/**
 * 设置token
 */
function SET_TOKEN(token: string) {
  localStorage.setItem('TOKEN', token)
}

function REMOVE_TOKEN() {
  localStorage.removeItem('TOKEN')
}

export default defineStore('User', () => {
  // token值
  const token: Ref<string | null> = ref(GET_TOKEN())
  /**
   * 登录获取token
   * @param data
   */
  const userLogin = async (data: loginForm) => {
    const loginRes = await login(data)
    if (loginRes?.code === 0 && loginRes?.data?.token) {
      token.value = loginRes.data.token
      SET_TOKEN(loginRes.data.token)
      return Promise.resolve()
    }
    return Promise.reject()
  }

  /**
   * 获取用户信息(用户数据存在内存中更安全，但是内存存储刷新即会丢失。可在路由守卫触发时判断是否存在，不存在用token请求再进行存储)
   */
  const userInfo: Ref<getUserInfoResponseData | null> = ref(null)
  const getUserInfoHandler = async (token: string) => {
    const res = await getUserInfo(token)
    if (res?.code === 0 && res?.data) {
      userInfo.value = res.data
    } else {
      return Promise.reject(new Error(res?.message || '获取用户信息失败'))
    }
  }

  /**
   * 退出登录
   */
  const userLogout = async () => {
    const res = await loginOut(token.value as string)
    if (res?.code === 0) {
      token.value = null
      userInfo.value = null
      REMOVE_TOKEN()
    } else {
      return Promise.reject(new Error(res?.message || '退出登录状态失败'))
    }
  }

  // 菜单路由
  const menuRoute: RouteRecordRaw[] = constantRoute
  return {
    // 用户登录
    token,
    userLogin,

    // 用户信息
    userInfo,
    getUserInfoHandler,

    // 退出登录
    userLogout,

    // 路由菜单
    menuRoute
  }
})
