import request from '@/utils/request'
import type { loginForm, loginResponseData, getUserInfoResponseData } from '@/types/user'
import type { Response } from '@/types/response'
export function login(data: loginForm): Promise<Response<loginResponseData>> {
  return request({
    url: '/auth/local/login/',
    method: 'POST',
    data
  })
}

export function getUserInfo(token: string): Promise<Response<getUserInfoResponseData>> {
  return request({
    url: '/user/profile',
    method: 'GET',
    headers: {
      token
    }
  })
}
