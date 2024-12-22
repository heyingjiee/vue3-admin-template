<script setup lang="ts">
import { ref } from 'vue'
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()

const isDark = ref(false)

const curThemeColor = ref('#409EFF')

const handleCommand = (command: string) => {
  if (command === 'loginOut') {
    loginOut()
  }
}
const changeDarkMode = () => {
  const html = document.documentElement
  // debugger
  if (isDark.value) {
    html.className = 'dark'
  } else {
    html.className = ''
  }
}

const changeTheme = (curColor: string) => {
  const html = document.documentElement

  html.style.setProperty('--el-color-primary', curColor)
}
const loginOut = async () => {
  await userStore.userLogout()
  router.replace({ path: '/login' }).catch((err) => {
    console.log(err)
  })
}
</script>

<template>
  <div class="header-layout-container">
    <div class="title">后台管理系统</div>
    <div class="user-center">
      <!-- 头像-->
      <template v-if="userStore.userInfo?.avatar">
        <el-avatar :src="userStore.userInfo.avatar"> </el-avatar>
      </template>
      <template v-else>
        <el-avatar> {{ userStore.userInfo?.username?.slice(0, 1) || '' }} </el-avatar>
      </template>

      <el-dropdown trigger="click" :hide-on-click="false" size="large" @command="handleCommand">
        <span class="user-center-name">
          {{ userStore.userInfo?.username || '' }}
          <el-icon><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="flex">
              <div style="margin-right: 10px">主题</div>
              <el-color-picker v-model="curThemeColor" size="large" @change="changeTheme" />
            </el-dropdown-item>
            <el-dropdown-item class="flex">
              <div style="margin-right: 10px">暗黑模式</div>
              <el-switch
                v-model="isDark"
                active-action-icon="Moon"
                inactive-action-icon="Sunny"
                size="large"
                @change="changeDarkMode"
              />
            </el-dropdown-item>
            <el-dropdown-item divided command="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="less">
.header-layout-container {
  width: 100vw;
  padding: 0 20px;
  box-sizing: border-box;
  height: @header-height;
  background: @header-bg-color;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-weight: bold;
    font-size: 30px;
    color: white;
  }
  .user-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-center-name {
      color: #ffffff;
      margin-left: 10px;
    }
  }
}
</style>
