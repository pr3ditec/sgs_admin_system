<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 * @active
 */
import { onMounted, ref, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import type {
  ApiResponse,
  ButtonController,
  Cliente,
  InputController,
  OrdemServico,
  SelectController
} from '@/Helpers/Types'
import { buttonHandler, validateInputParameter, validateSelectParameter } from '@/Helpers/Validator'
import { Response } from '@/Helpers/Response'
import { clearServiceOrder } from '@/Helpers/Free'
import { bindKey } from '@/Helpers/Binder'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSSelect from '@/components/Forms/SGSSelect.vue'
import { getSessionUser } from '@/Helpers/SessionUser'
import SGSCheckbox from '@/components/Forms/SGSCheckbox.vue'

const request = useGlobalStore().request

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false
})

const numeroController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const clienteController: Ref<SelectController> = ref({
  isDisabled: true,
  isEmpty: false,
  notFound: false
})

const usuarioController: Ref<SelectController> = ref({
  isDisabled: true,
  isEmpty: false,
  notFound: false
})

const clienteData: Ref<Array<Cliente>> = ref([])
const apiFormData: Ref<OrdemServico> = ref(<OrdemServico>{
  numero: '',
  concluido: false,
  recebido: false,
  equipamentos: [],
  servicos: [],
  cliente_id: 0,
  usuario_id: 0
})

const validateData = (): boolean => {
  const isValidNumero = validateInputParameter(numeroController.value, apiFormData.value.numero)
  const isValidClienteId = validateSelectParameter(
    clienteController.value,
    apiFormData.value.cliente_id
  )
  const isValidUsuarioId = validateInputParameter(
    usuarioController.value,
    apiFormData.value.usuario_id
  )

  return isValidNumero && isValidClienteId && isValidUsuarioId
}

const getClienteData = async () => {
  await request.get('/cliente').then((res: ApiResponse) => {
    if (res.status) {
      clienteData.value = res.list as Array<Cliente>
      clienteController.value.isDisabled = false
    } else {
      clienteController.value.notFound = true
    }
  })
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }

  await request
    .store('/ordem-servico', apiFormData.value)
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
      clearServiceOrder(apiFormData.value)
    })
}

onMounted(() => {
  Promise.all([getClienteData()]).catch((err) => {
    console.log('Erro ao buscar dados de api...')
  })
  bindKey('Enter', sendData)
  // apiFormData.value.usuario_id = getSessionUser() as number
  apiFormData.value.usuario_id = 1
})
</script>
<template>
  <DefaultLayout>
    <FormLayout title="create-service-order">
      <template #body>
        <SGSInput
          label="number"
          required
          :reference="apiFormData"
          referenceName="nome"
          :controller="numeroController"
        />
        <SGSDivider />
        <SGSCheckbox label="finished" :reference="apiFormData" referenceName="concluido" />
        <SGSDivider />
        <SGSCheckbox label="payed" :reference="apiFormData" referenceName="recebido" />
        <SGSDivider />
        <SGSSelect
          label="client"
          :items="clienteData"
          :track="{ field: 'id', name: 'nome' }"
          :controller="clienteController"
          :reference="apiFormData"
          referenceName="cliente_id"
          required
        />
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-service-order" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
