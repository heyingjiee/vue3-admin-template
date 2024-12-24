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
    <!--<el-card px-100 class="w-full px-5 py-1" shadow="never">-->
    <!--  <el-breadcrumb separator="/">-->
    <!--    <template v-for="item in route.matched" :key="item.path">-->
    <!--      <el-breadcrumb-item v-if="!item.meta.hiddenMenuItem" class="prose prose-truegray">-->
    <!--        {{ item.meta.title }}-->
    <!--      </el-breadcrumb-item>-->
    <!--    </template>-->
    <!--  </el-breadcrumb>-->
    <!--</el-card>-->
    <el-breadcrumb separator="/">
      <template v-for="item in route.matched" :key="item.path">
        <el-breadcrumb-item v-if="!item.meta.hiddenMenuItem" class="prose prose-truegray">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="less"></style>
