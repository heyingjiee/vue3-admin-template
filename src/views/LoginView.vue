<script setup lang="ts">
import { reactive } from 'vue'
import { ElNotification } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '@/stores/modules/user'
import { getLoginTimeTip } from '@/utils/time'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const loginForm = reactive({
  username: '',
  password: ''
})

const login = async () => {
  try {
    await userStore.userLogin(loginForm)
    await router.push({ path: (route.query.redirect as string) ?? '/' })
    ElNotification({
      title: `Hi，${getLoginTimeTip()}好`,
      message: '欢迎回来',
      type: 'success'
    })
  } catch (err) {
    console.log('login fail:', err)
  }
}
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center bg-#274a6c">
    <div class="h-480px w-800 flex rounded-16 bg-#FDFDFD">
      <div class="w-50% flex flex-col items-center justify-center border-r-1 border-r-slate-300">
        <div
          class="h-48 w-fit flex items-center justify-center rounded-999 bg-#EBF3FE p-20 c-#3d8af5"
        >
          扫码登录更便捷
        </div>
        <div
          class="qr-container mb-20 mt-40 h-160 w-160 border-width-2 border-white rounded-12 border-solid p-22"
        >
          <div class="h-full w-full bg-gray"></div>
        </div>
        <div>使用微信扫码登录</div>
      </div>
      <div class="w-50% flex flex-col items-center justify-center">
        <div class="w-304">
          <div class="pb-32 text-18 font-600">手机号登录</div>
          <div>
            <div class="h-48 flex items-center rounded-999 bg-#F5F5F5 p-16">
              <div class="pr-18">+86</div>
              <input
                v-model="loginForm.username"
                class="flex-grow-1"
                placeholder="输入手机号"
                type="text"
              />
            </div>

            <div class="mt-16 h-48 flex items-center justify-between rounded-999 bg-#F5F5F5 p-16">
              <input
                v-model="loginForm.username"
                class="flex-grow-1"
                placeholder="输入验证码"
                type="text"
              />
              <div class="whitespace-nowrap pr-18 c-[rgba(255,36,66)]">获取验证码</div>
            </div>
          </div>
          <div class="mt-10 text-center text-14 c-#ff2442">验证码错误</div>
          <div
            class="my-16 h-48 flex cursor-pointer items-center justify-center rounded-999 bg-#ff2442 text-16 c-white font-600"
            @click="login()"
          >
            登录
          </div>
          <div class="flex items-center justify-center">
            <input type="checkbox" />
            <div class="ml-6 text-12 c-#B5B5B5">
              我已阅读并同意<span class="c-#13386c">《用户协议》《隐私政策》</span>
            </div>
          </div>
          <div class="mt-28 flex items-center justify-center gap-x-10 text-center c-#B5B5B5">
            <div>其他登录方式：</div>
            <div class="i-grommet-icons:wechat text-#44B036" />
            <div class="i-grommet-icons:github text-#515767" />
            <div class="i-grommet-icons:mail" />
            <!--全部 icon https://icones.js.org/-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.qr-container {
  box-shadow:
    0 4px 32px 0 rgba(0, 0, 0, 0.08),
    0 1px 4px 0 rgba(0, 0, 0, 0.04);
}
input[type='text'] {
  appearance: none;
  background: #f5f5f5;
  border: none;
  outline: none;
}
</style>
