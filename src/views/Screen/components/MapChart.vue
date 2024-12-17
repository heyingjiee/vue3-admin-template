<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import chinaJSON from '../data/china.json'

const map = ref()
// 注册地图
echarts.registerMap('china', chinaJSON as any)
onMounted(() => {
  const chart = echarts.init(map.value)
  chart.setOption({
    // 图标配置，可以同时配置多个图表
    geo: {
      map: 'china',
      label: {
        show: true,
        fontSize: 7
      },
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    series: [
      {
        type: 'lines',
        polyline: true,
        data: [
          {
            coords: [
              [116.405285, 39.904989],
              [96.386348, 42.727592]
            ],
            lineStyle: {
              color: 'red',
              width: 10
            }
          },
          {
            coords: [
              [118.767413, 32.041544],
              [108.948024, 34.263161]
            ],
            lineStyle: {
              color: 'red',
              width: 10
            }
          }
        ],
        effect: {
          show: true,
          symbol: 'arrow',
          symbolSize: 30,
          color: 'red'
        }
      }
    ]
  })
})
</script>

<template>
  <div class="flex justify-center map-container">
    <div class="map" ref="map"></div>
  </div>
</template>

<style scoped lang="less">
.map-container {
  width: 100%;
  background: #11144e;
  padding: 100px 0 0;
  .map {
    width: 80%;
    height: 800px;
  }
}
</style>
