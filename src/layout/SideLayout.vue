<script lang="ts" setup>
defineOptions({
  name: 'SideLayout'
})
defineProps(['menuList'])

const hasValidChildren = (menuItem: any) => {
  if (menuItem.children) {
    const index = menuItem.children.findIndex((item: any) => item.meta?.hiddenMenuItem !== true)

    return index !== -1
  }
  return false
}
</script>
<template>
  <template v-for="menuItem in menuList" :key="menuItem.path">
    <template v-if="hasValidChildren(menuItem)">
      <el-sub-menu v-if="!menuItem.meta.hiddenMenuItem" :index="menuItem.path">
        <template #title>
          <el-icon :size="15">
            <component :is="menuItem.meta.icon"></component>
          </el-icon>
          <span>{{ menuItem.meta.title }}</span>
        </template>
        <SideLayout :menuList="menuItem.children" />
      </el-sub-menu>
      <SideLayout v-else :menuList="menuItem.children" />
    </template>

    <template v-else>
      <el-menu-item v-if="!menuItem.meta.hiddenMenuItem" :index="menuItem.path">
        <el-icon :size="15">
          <component :is="menuItem.meta.icon"></component>
        </el-icon>
        <span>{{ menuItem.meta.title }}</span>
      </el-menu-item>
    </template>
  </template>
</template>
