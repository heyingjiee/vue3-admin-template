<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'

// 加载echarts图表
const liquid = ref()
onMounted(() => {
  const chart = echarts.init(liquid.value)
  chart.setOption({
    // 图表配置
    series: [
      {
        type: 'liquidFill',
        data: [0.6, 0.2],
        radius: '70%'
      }
    ]
  })
})
</script>

<template>
  <div ref="liquid" class="liquid"></div>
</template>

<style scoped lang="less">
.liquid {
  width: 100%;
  height: 400px;
  background: #11144e;
}
</style>
