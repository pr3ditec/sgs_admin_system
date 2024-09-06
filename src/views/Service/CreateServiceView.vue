<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 * @active
 */
import { onMounted, ref, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import { Response } from '@/Helpers/Response'
import { clearServiceData } from '@/Helpers/Free'
import { bindKey } from '@/Helpers/Binder'
import type { ApiResponse, ButtonController, InputController, Servicos } from '@/Helpers/Types'
import { buttonHandler, validateInputParameter } from '@/Helpers/Validator'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSFormHelper from '@/components/Forms/SGSFormHelper.vue'
import SGSMoneyInput from '@/components/Forms/SGSMoneyInput.vue'

const request = useGlobalStore().request

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false
})

const descriptionController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})
const priceController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const apiFormData: Ref<Servicos> = ref(<any>{
  descricao: '',
  preco: ''
})

const sanitazeMoney = () => {
  apiFormData.value.preco = apiFormData.value.preco.substring(3)
}

const validateData = (): boolean => {
  sanitazeMoney()
  const isValidDescription = validateInputParameter(
    descriptionController.value,
    apiFormData.value.descricao
  )
  const isValidPrice = validateInputParameter(priceController.value, apiFormData.value.preco)

  return isValidDescription && isValidPrice
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }

  await request
    .store('/servico', apiFormData.value)
    .then((res: ApiResponse) => {
      console.log(res)
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
      clearServiceData(apiFormData.value)
    })
}

onMounted(() => {
  bindKey('Enter', sendData)
})
</script>
<template>
  <DefaultLayout>
    <FormLayout title="create-service">
      <template #helper>
        <SGSFormHelper />
      </template>
      <template #body>
        <SGSInput
          label="description"
          required
          :reference="apiFormData"
          referenceName="descricao"
          :controller="descriptionController"
        />
        <SGSDivider />
        <SGSMoneyInput
          label="price"
          required
          :reference="apiFormData"
          referenceName="preco"
          :controller="priceController"
        />
        <SGSDivider />
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-service" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
