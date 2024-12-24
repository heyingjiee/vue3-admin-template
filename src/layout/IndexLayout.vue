<script setup lang="ts">
import HeaderLayout from '@/layout/HeaderLayout.vue'
import SideLayout from '@/layout/SideLayout.vue'
import BreadcrumbBar from '@/layout/BreadcrumbBar.vue'

import useUserStore from '@/stores/modules/user'
import { useRoute } from 'vue-router'

const userStore = useUserStore()
const menuList = userStore.menuRoute

const route = useRoute()
</script>
<template>
  <div class="fixed left-0 top-0 h-screen w-screen flex flex-col">
    <HeaderLayout />
    <div class="w-screen flex flex-grow-1">
      <el-menu
        class="w-180"
        active-text-color="#4787d5"
        :default-active="route.path"
        router
        unique-opened
      >
        <SideLayout :menu-list="menuList" />
      </el-menu>
      <div class="flex-grow-1">
        <BreadcrumbBar :route="route" />
        <div class="content-component">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.content-component {
  width: 100%;
  flex-grow: 1;
  min-height: 1px;

  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  overflow: scroll;
}
.fade-enter-from {
  opacity: 0;
  padding-left: 10px;
}

.fade-enter-to {
  opacity: 1;
  padding-left: 0;
  transition: 0.5s;
}
</style>
