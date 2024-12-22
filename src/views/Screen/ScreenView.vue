<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ScreenHeader from './components/ScreenHeader.vue'
import LiquidChart from './components/LiquidChart.vue'
import MapChart from './components/MapChart.vue'

// 页面动态缩放
const screen = ref()
const scaleTool = (w = 1920, h = 1080) => {
  //返回小的那个比例，宽高都缩放这个比例（等比例缩放）
  const xProportion = window.innerWidth / w
  const yProportion = window.innerHeight / h
  return xProportion < yProportion ? xProportion : yProportion
}
onMounted(() => {
  screen.value.style.transform = `scale(${scaleTool()}) translate(-50%, -50%)`
})
window.onresize = () => {
  screen.value.style.transform = `scale(${scaleTool()}) translate(-50%, -50%)`
}
</script>
<template>
  <div class="container">
    <div ref="screen" class="screen">
      <ScreenHeader class="header" />
      <div class="main flex flex-grow-1">
        <div class="left flex-shrink-0">
          <LiquidChart />
        </div>
        <div class="center flex-grow-1">
          <MapChart />
        </div>
        <div class="right flex-shrink-0"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  width: 100vw;
  height: 100vh;
  background: url('./images/bg.png') no-repeat left top/cover;
  .screen {
    width: 1920px;
    height: 1080px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform-origin: left top;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      'header header header'
      'main main main';
    .header {
      grid-area: header;
    }
    .main {
      grid-area: main;
      .left {
        width: 500px;
      }
      .center {
        margin: 0 20px;
      }
      .right {
        width: 500px;
      }
    }
  }
}
</style>
