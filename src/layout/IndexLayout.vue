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
  <div class="layout-container">
    <HeaderLayout />
    <div class="main-layout-container">
      <div class="side-layout-container">
        <el-menu
          background-color="#323744"
          unique-opened
          text-color="#fff"
          active-text-color="#4787d5"
          :default-active="route.path"
          router
        >
          <SideLayout :menuList="menuList" />
        </el-menu>
      </div>
      <div class="content-layout-container">
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
.layout-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .main-layout-container {
    width: 100vw;
    height: calc(100vh - @header-height);
    display: flex;

    .side-layout-container {
      width: @side-width;
      background: @side-bg-color;
      overflow: scroll;
    }
    .content-layout-container {
      width: calc(100vw - @side-width);
      height: 100%;
      background: #f6f8fa;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .content-component {
        width: 100%;
        flex-grow: 1;
        min-height: 1px;

        padding: 20px;
        box-sizing: border-box;
        height: 100%;
        overflow: scroll;
      }
    }
  }
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
