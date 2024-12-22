<script setup lang="ts">
import { ref } from 'vue'

interface User {
  userID: number
  username: string
  userRole: string
  createTime: string
  updateTime: string
}

const userList = ref<User[]>([
  {
    userID: 120,
    username: '1',
    userRole: '管理员',
    createTime: '2023-1-1',
    updateTime: '2023-1-1'
  }
])

const editDialogVis = ref(false)
const openEditDialog = (row: User) => {
  console.log('openEditDialog -->', row)
  editDialogVis.value = true
}

const getCustomerList = () => {}

const deleteById = () => {}

// const pageSize = 10
const curPageNum = ref(1)
const totalPageNum = ref(81)
</script>

<template>
  <div>
    <el-card>
      <!-- 操作区-->
      <el-form inline class="operate-area">
        <el-form-item>
          <el-input placeholder="请输入用户名" clearable size="large"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="Search" size="large">搜索</el-button>
          <el-button type="success" icon="Plus" size="large">添加</el-button>
          <el-button type="danger" icon="Minus" size="large">批量删除</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格-->
      <el-table :data="userList" stripe border size="large">
        <el-table-column label="#" type="selection"></el-table-column>
        <el-table-column prop="userID" label="用户ID"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="userRole" label="用户角色"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>

        <el-table-column label="操作" width="500">
          <template #default="scope">
            <el-button type="primary" icon="User" @click="openEditDialog(scope.row)"
              >分配角色</el-button
            >
            <el-button type="primary" icon="Edit" @click="openEditDialog(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" icon="Delete" @click="deleteById(scope.row.rid)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区 -->
      <div class="pagination-area">
        <el-pagination
          v-model:current-page="curPageNum"
          layout="prev, pager, next"
          background
          :total="totalPageNum"
          @current-change="getCustomerList"
        >
        </el-pagination>
      </div>
    </el-card>

    <el-dialog v-model="editDialogVis"> 111 </el-dialog>
  </div>
</template>

<style scoped lang="less">
.operate-area {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pagination-area {
  padding: 20px 0;
}
</style>
