import request from '@/utils/request'
import type { loginForm, loginResponseData, getUserInfoResponseData } from '@/types/user'
import type { Response } from '@/types/response'
export function login(data: loginForm): Promise<Response<loginResponseData>> {
  return request({
    url: '/api/login',
    method: 'POST',
    data
  })
}

export function getUserInfo(token: string): Promise<Response<getUserInfoResponseData>> {
  return request({
    url: '/api/get-user-info',
    method: 'POST',
    data: {
      token
    }
  })
}

export function loginOut(token: string): Promise<Response<null>> {
  return request({
    url: '/api/login-out',
    method: 'POST',
    data: {
      token
    }
  })
}
