<script setup lang="ts">
import Router from '@/router'

defineProps({
  route: {
    type: Router,
    default: () => {}
  }
})
</script>

<template>
  <div>
    <div class="breadcrumb-container w-full px-20 py-20">
      <el-breadcrumb separator="/">
        <template v-for="item in route.matched" :key="item.path">
          <el-breadcrumb-item v-if="!item.meta.hiddenMenuItem" class="prose prose-truegray">
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
  </div>
</template>

<style scoped lang="less">
.breadcrumb-container {
  background-color: var(--el-menu-bg-color);
  border-bottom: 1px solid var(--el-menu-border-color);
}
</style>
