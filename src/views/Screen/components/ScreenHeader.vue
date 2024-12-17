<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="header-container flex items-start">
    <div class="header-left flex justify-end">
      <div class="go-home-btn flex justify-center" @click="goHome">首页</div>
    </div>
    <div class="header-center">大屏可视化平台</div>
    <div class="header-right"></div>
  </div>
</template>

<style scoped lang="less">
.header-container {
  width: 100%;
  line-height: 100px;

  font-size: 30px;
  color: #29fcff;
  text-align: center;
  .header-left {
    flex: 1;
    height: 68px;
    background: url('../images/dataScreen-header-left-bg.png') no-repeat center/cover;
    .go-home-btn {
      width: 200px;
      height: 60px;
      background: url('../images/dataScreen-header-btn-bg-l.png') no-repeat center/cover;
    }
  }
  .header-center {
    flex: 2;
    height: 100px;
    background: url('../images/dataScreen-header-center-bg.png') no-repeat center/cover;
  }
  .header-right {
    flex: 1;
    height: 68px;
    background: url('../images/dataScreen-header-left-bg.png') no-repeat center/cover;
  }
}
</style>
