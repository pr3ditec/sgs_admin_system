<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 * @active
 */
import { onMounted, ref, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import type { ApiResponse, ButtonController, InputController, TipoUsuario } from '@/Helpers/Types'
import { buttonHandler, validateInputParameter } from '@/Helpers/Validator'
import { Response } from '@/Helpers/Response'
import { clearUserTypeData } from '@/Helpers/Free'
import { bindKey } from '@/Helpers/Binder'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'

const request = useGlobalStore().request

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false
})

const nomeController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const apiFormData: Ref<TipoUsuario> = ref(<TipoUsuario>{
  nome: ''
})

const validateData = (): boolean => {
  const isValidNome = validateInputParameter(nomeController.value, apiFormData.value.nome)

  return isValidNome
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }

  await request
    .store('/tipo-usuario', apiFormData.value)
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
      clearUserTypeData(apiFormData.value)
    })
}

onMounted(() => {
  bindKey('Enter', sendData)
})
</script>
<template>
  <DefaultLayout>
    <FormLayout
      title="create-user-type"
      :push="{ label: 'list-type-user', to: '/user/type/list' }"
    >
      <template #body>
        <SGSInput
          label="name"
          required
          :reference="apiFormData"
          referenceName="nome"
          :controller="nomeController"
        />
        <SGSDivider />
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-user-type" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
