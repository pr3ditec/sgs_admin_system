<script setup lang="ts">
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSSelect from '@/components/Forms/SGSSelect.vue'
import { bindKey } from '@/Helpers/Binder'
import { clearPermissionUserData } from '@/Helpers/Free'
import { Response } from '@/Helpers/Response'
import type {
  ApiResponse,
  ButtonController,
  Permissao,
  PermissaoUsuario,
  SelectController,
  Usuario
} from '@/Helpers/Types'
import { buttonHandler, validateSelectParameter } from '@/Helpers/Validator'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import { useGlobalStore } from '@/stores/global'
import { onMounted, ref, type Ref } from 'vue'

const request = useGlobalStore().request

const userData: Ref<Array<Usuario>> = ref([] as Array<Usuario>)
const permissionData: Ref<Array<Permissao>> = ref([] as Array<Permissao>)

const apiFormData: Ref<PermissaoUsuario> = ref({
  permissao_id: 0,
  usuario_id: 0
})

const buttonController: Ref<ButtonController> = ref({
  isDisabled: false,
  isLoading: false
})

const userController: Ref<SelectController> = ref({
  isDisabled: true,
  notFound: false,
  isEmpty: false
})

const permissionController: Ref<SelectController> = ref({
  isDisabled: true,
  notFound: false,
  isEmpty: false
})

const getUserData = async () => {
  await request.get('/usuario').then((res: ApiResponse) => {
    if (res.status) {
      userData.value = res.list as Array<Usuario>
      userController.value.isDisabled = false
    } else {
      userController.value.notFound = true
    }
  })
}

const getPermissionData = async () => {
  await request.get('/permissao').then((res: ApiResponse) => {
    if (res.status) {
      permissionData.value = res.list as Array<Permissao>
      permissionController.value.isDisabled = false
    } else {
      permissionController.value.notFound = true
    }
  })
}

const validateData = (): boolean => {
  const isValidUsuario = validateSelectParameter(userController.value, apiFormData.value.usuario_id)

  const isValidPermissao = validateSelectParameter(
    permissionController.value,
    apiFormData.value.permissao_id
  )

  return isValidPermissao && isValidUsuario
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }

  await request
    .store('/usuario-permissao', apiFormData.value)
    .then((res: ApiResponse) => {
      if (res.status) {
        Response.show('success', res.messageCode)
      } else {
        Response.show('error', res.messageCode)
      }
    })
    .catch((err) => {
      Response.show('error', 'unexpected-error')
    })
    .finally(() => {
      buttonHandler(buttonController.value, false)
      clearPermissionUserData(apiFormData.value)
    })
}
onMounted(() => {
  Promise.all([getUserData(), getPermissionData()]).catch((err) => {
    console.log('Erro ao buscar dados de api')
  })
  bindKey('Enter', sendData)
})
</script>
<template>
  <DefaultLayout>
    <FormLayout title="add-permission">
      <template #body>
        <SGSSelect
          :items="userData"
          label="users"
          :track="{ field: 'id', name: 'nome' }"
          :controller="userController"
          :reference="apiFormData"
          referenceName="usuario_id"
          required
        />
        <SGSDivider />

        <SGSSelect
          :items="permissionData"
          label="permission"
          :track="{ field: 'id', name: 'nome' }"
          :controller="permissionController"
          :reference="apiFormData"
          referenceName="permissao_id"
          required
        />
        <SGSDivider />
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-user" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
