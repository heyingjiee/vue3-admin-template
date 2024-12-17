<script setup lang="ts">
defineProps(['route'])
</script>

<template>
  <div>
    <el-card style="width: 100%; padding: 1px 10px" shadow="never">
      <el-breadcrumb separator="/">
        <template v-for="item in route.matched" :key="item.path">
          <el-breadcrumb-item v-if="!item.meta.hiddenMenuItem">{{
            item.meta.title
          }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </el-card>
  </div>
</template>

<style scoped lang="less"></style>
