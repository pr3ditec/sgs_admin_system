<script setup lang="ts">
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSPassword from '@/components/Forms/SGSPassword.vue'
import DarkModeSwitcher from '@/components/Header/DarkModeSwitcher.vue'
import SidebarHeaderLogo from '@/components/Sidebar/SidebarHeaderLogo.vue'
import { bindKey } from '@/Helpers/Binder'
import { clearLoginData } from '@/Helpers/Free'
import LocalStorageController from '@/Helpers/LocalStorage'
import { Response } from '@/Helpers/Response'
import type {
  ApiResponse,
  ButtonController,
  InputController,
  Login,
  PasswordController
} from '@/Helpers/Types'
import {
  buttonHandler,
  validateInputParameter,
  validatePasswordParamenter
} from '@/Helpers/Validator'
import { useGlobalStore } from '@/stores/global'
import { onMounted, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

const request = useGlobalStore().request
const router = useRouter()

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false
})

const emailController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const senhaController: Ref<PasswordController> = ref({
  isEmpty: false,
  isDisabled: false,
  isShort: false
})

const apiFormData: Ref<Login> = ref(<Login>{
  email: '',
  senha: ''
})

const validateData = (): boolean => {
  const isValidEmail = validateInputParameter(emailController.value, apiFormData.value.email)
  const isValidPassword = validatePasswordParamenter(senhaController.value, apiFormData.value.senha)

  return isValidEmail && isValidPassword
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }

  await request
    .store('/login', apiFormData.value)
    .then((res: ApiResponse) => {
      if (res.status) {
        //@ts-expect-error
        request.setToken(res.list.login.token)
        //@ts-expect-error
        LocalStorageController.storeToken(res.list.login.token)
        //@ts-expect-error
        LocalStorageController.storeUser(res.list.usuario)
        Response.show('success', res.messageCode)
        router.push('/dashboard')
      } else {
        Response.show('error', res.messageCode)
      }
    })
    .catch((err) => {
      Response.show('error', 'unexpected-error')
    })
    .finally(() => {
      buttonHandler(buttonController.value, false)
      clearLoginData(apiFormData.value)
    })
}

onMounted(() => {
  bindKey('Enter', sendData)
})
</script>
<template>
  <main class="flex flex-row">
    <div
      class="flex flex-col bg-slate-800 dark:bg-slate-900 w-1/2 h-screen items-center justify-center"
    >
      <SidebarHeaderLogo w="350" h="300" />
    </div>
    <div
      class="flex flex-col gap-4 bg-slate-100 p-4 w-1/2 h-screen justify-center dark:bg-slate-800"
    >
      <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-400 mb-5">Entrar no SGS</h3>
      <SGSInput
        label="email"
        required
        :reference="apiFormData"
        referenceName="email"
        :controller="emailController"
      />
      <SGSPassword
        label="password"
        required
        :reference="apiFormData"
        referenceName="senha"
        :controller="senhaController"
      />
      <SGSButton @click="sendData" label="sign-in" :controller="buttonController" />
      <div class="flex flex-col mx-auto mt-3 gap-2">
        <p class="underline cursor-pointer">Esqueceu a senha?</p>
        <p class="underline cursor-pointer">Solicite uma conta</p>
      </div>
    </div>
  </main>
</template>
