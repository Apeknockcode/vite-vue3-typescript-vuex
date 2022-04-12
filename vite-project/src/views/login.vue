<script lang="ts">
import {useRouter, useRoute} from 'vue-router'
import {defineComponent, reactive, computed, getCurrentInstance} from 'vue'
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue'
import {any} from 'vue-types'
interface FormState {
  username: string
  password: string
  remember: boolean
}

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const vue: any = getCurrentInstance()
    const router = useRouter()
    const formState = reactive<FormState>({
      username: 'admin',
      password: 'admin',
      remember: true,
    })
    const onFinish = async (values: any) => {
      console.log('Success:', values)
      // 登陆流程proxy

      vue.proxy.$http.login.login(values.username).then((res: any) => {
        vue.proxy.$store.commit('LOGIN_IN', res.data.token)
        router.push('/index')
      })
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    const disabled = computed(() => {
      return !(formState.username && formState.password)
    })

    // 忘记密码
    const handleForgetPws = () => {
      router.push({
        path: '/forgetpassword',
      })
    }
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
      handleForgetPws,
    }
  },
})
</script>

<template>
  <div id="contain">
    <div class="userInfoModel flex-center-center">
      这里将用 Three.js 搭建一个机器人3D模型
    </div>
    <div class="loginIcon flex-center-center-column">
      <h1 class="loginTitle mgBotton40">Login Systerm</h1>
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{required: true, message: '请输入用户名！'}]"
        >
          <a-input
            v-model:value="formState.username"
            placeholder="用户名"
            @keyup.enter="onFinish"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{required: true, message: '请输入密码！'}]"
        >
          <a-input-password
            v-model:value="formState.password"
            @keyup.enter="onFinish"
            placeholder="密码"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <div class="login-form-wrap">
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          </a-form-item>
          <a-form-item no-style @click="handleForgetPws">
            <a-button type="link">忘记密码</a-button>
          </a-form-item>
        </div>

        <a-form-item class="options">
          <a-button
            :disabled="disabled"
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            登录
          </a-button>
          <!-- Or
          <a href="">register now!</a> -->
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<style lang="scss">
#contain {
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .userInfoModel {
    width: 40%;
    height: 80vh;
    background: #fff;
    margin-right: 30px;
    border-radius: 8px;
  }
  .loginIcon {
    width: 30vw;
    height: 80vh;
    background: #fff;
    border-radius: 8px;
    box-shadow: -1px 1px 20px rgba(125, 125, 125, 0.3);
    padding: 20px;
    display: flex;
    .loginTitle {
      text-align: center;
    }
  }
  .login-form-wrap {
    display: flex;
    align-items: center;
  }
  .login-form-forgot {
    min-height: 32px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .ant-form {
    width: 80%;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>
