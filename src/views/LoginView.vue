<script setup lang="ts">
import { reactive, ref } from 'vue'
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '@/stores/modules/user'
import { getLoginTimeTip } from '@/utils/time'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const loginForm = reactive({
  username: '',
  password: ''
})
const loading = ref(false)

const loginFormRules = reactive<FormRules<typeof loginForm>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码,长度大于5位', min: 5, trigger: 'blur' }]
})

const formRef = ref<FormInstance>()

const login = (formRef: FormInstance | undefined) => {
  loading.value = true
  formRef?.validate(async (valid) => {
    try {
      if (!valid) {
        return false
      }
      await userStore.userLogin(loginForm)
      await router.push({ path: (route.query.redirect as string) ?? '/' })
      ElNotification({
        title: `Hi，${getLoginTimeTip()}好`,
        message: '欢迎回来',
        type: 'success'
      })
    } catch (err) {
      console.log('login fail:', err)
    } finally {
      loading.value = false
    }
  })
}
</script>

<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像-->
      <div class="avatar">
        <img src="@/assets/logo.png" />
      </div>
      <!--表单区-->
      <el-form
        ref="formRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 账号 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <template #prepend>
              <el-button :icon="UserFilled" />
            </template>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password>
            <template #prepend>
              <el-button :icon="Lock" />
            </template>
          </el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn-area">
          <el-button type="primary" @click="login(formRef)" :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="less">
.login_container {
  background-color: #274a6c;
  width: 100vw;
  height: 100vh;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%; //绝对定位，该元素的左边缘移动到父元素的50%的
  transform: translate(-50%, -50%); //横向，纵向 移动本元素宽，高的50%
  background-color: white;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

.btn-area {
  text-align: right;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}
</style>
