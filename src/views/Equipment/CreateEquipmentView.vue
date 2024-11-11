<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 * @active
 */
import { onMounted, ref, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import type {
  Aparelho,
  ApiResponse,
  ButtonController,
  Cliente,
  InputController,
  SelectController
} from '@/Helpers/Types'
import { buttonHandler, validateInputParameter, validateSelectParameter } from '@/Helpers/Validator'
import { Response } from '@/Helpers/Response'
import { clearEquipmentData } from '@/Helpers/Free'
import { bindKey } from '@/Helpers/Binder'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSSelect from '@/components/Forms/SGSSelect.vue'

const request = useGlobalStore().request

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false
})

const numeroSerieController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const nomeController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const tipoController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const clientController: Ref<SelectController> = ref({
  isEmpty: false,
  notFound: false,
  isDisabled: true
})

const clientData: Ref<Array<Cliente>> = ref([])

const apiFormData: Ref<Aparelho> = ref(<Aparelho>{
  numero_serie: '',
  nome: '',
  tipo: '',
  cliente_id: 0
})

const validateData = (): boolean => {
  const isValidNumeroSerie = validateInputParameter(
    numeroSerieController.value,
    apiFormData.value.numero_serie
  )
  const isValidNome = validateInputParameter(nomeController.value, apiFormData.value.nome)
  const isValidTipo = validateInputParameter(tipoController.value, apiFormData.value.tipo)
  const isValidCliente = validateSelectParameter(
    clientController.value,
    apiFormData.value.cliente_id
  )

  return isValidNome && isValidTipo && isValidCliente && isValidNumeroSerie
}

const getClientData = async () => {
  await request.get('/cliente').then((res: ApiResponse) => {
    if (res.status) {
      clientData.value = res.list as Array<Cliente>
      clientController.value.isDisabled = false
    } else {
      clientController.value.notFound = true
    }
  })
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }

  await request
    .store('/aparelho', apiFormData.value)
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
      clearEquipmentData(apiFormData.value)
    })
}

onMounted(() => {
  Promise.all([getClientData()]).catch((err) => {
    console.log('Erro ao buscar dados de api')
  })
  bindKey('Enter', sendData)
})
</script>

<style scoped>
.small-width {
  width: 550px; /* ajuste a largura conforme necessário */
}

.small-width1 {
  width: 200px; /* ajuste a largura conforme necessário */
}

.small-width2 {
  width: 150px; /* ajuste a largura conforme necessário */
}

.small-width3 {
  width: 350px; /* ajuste a largura conforme necessário */
}

.flex-row {
  display: flex;
  gap: 5px; /* espaçamento entre os campos */
}

</style>

<template>
  <DefaultLayout>
    <FormLayout title="create-equipment" :push="{ label: 'list-equipment', to: '/equipment/list' }">


      <template #body>
        <div class="flex-row">
          <SGSInput
          class="small-width1"
          label="serial-number"
          required
          :reference="apiFormData"
          referenceName="numero_serie"
          :controller="numeroSerieController"
        />
        <SGSDivider />
        <SGSInput
        class="small-width"
          label="name"
          required
          :reference="apiFormData"
          referenceName="nome"
          :controller="nomeController"
        />
        <SGSDivider />

        <SGSInput
          label="type"
          required
          :reference="apiFormData"
          referenceName="tipo"
          :controller="tipoController"
        />
        <SGSDivider />
        </div>
        
        
        
        <SGSSelect
          label="client"
          :items="clientData"
          :track="{ field: 'id', name: 'nome' }"
          :controller="clientController"
          :reference="apiFormData"
          referenceName="cliente_id"
          required
        />
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-equipment" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
