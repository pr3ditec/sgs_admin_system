<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 * @active
 */
import { onMounted, ref, watch, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import type { ApiResponse, ButtonController, Cidade, SelectController } from '@/Helpers/Types'
import { buttonHandler, validateSelectParameter } from '@/Helpers/Validator'
import { Response } from '@/Helpers/Response'
import { clearCityData } from '@/Helpers/Free'
import { bindKey } from '@/Helpers/Binder'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import axios from 'axios'
import SGSSelect from '@/components/Forms/SGSSelect.vue'

const request = useGlobalStore().request

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false
})

const cityController: Ref<SelectController> = ref({
  isEmpty: false,
  notFound: false,
  isDisabled: true
})

const ufControler: Ref<SelectController> = ref({
  isEmpty: false,
  notFound: false,
  isDisabled: true
})

const stateData: Ref<any> = ref({})
const cityData: Ref<any> = ref({})

const apiFormData: Ref<Cidade> = ref(<Cidade>{
  nome: '',
  uf: ''
})

const validateData = (): boolean => {
  const isValidNome = validateSelectParameter(cityController.value, apiFormData.value.nome)
  const isValidUf = validateSelectParameter(ufControler.value, apiFormData.value.uf)

  return isValidNome && isValidUf
}

const getStatesData = async () => {
  await axios
    .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((res: any) => {
      if (res.data) {
        stateData.value = res.data
        ufControler.value.isDisabled = false
      } else {
        ufControler.value.notFound = true
      }
    })
    .catch((err) => {
      ufControler.value.isDisabled = true
      ufControler.value.notFound = true
    })
}

const getCityData = async () => {
  await axios
    .get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${apiFormData.value.uf}/distritos`
    )
    .then((res: any) => {
      if (res.data) {
        cityData.value = res.data
        cityController.value.isDisabled = false
      } else {
        cityController.value.notFound = true
      }
    })
    .catch((err) => {
      cityController.value.notFound = true
      cityController.value.isDisabled = true
    })
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }

  await request
    .store('/cidade', apiFormData.value)
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
      clearCityData(apiFormData.value)
    })
}

watch(() => apiFormData.value.uf, getCityData)

onMounted(() => {
  getStatesData()
  bindKey('Enter', sendData)
})
</script>
<template>
  <DefaultLayout>
    <FormLayout title="create-city" :push="{ label: 'list-city', to: '/city/list' }">
      <template #body>
        <SGSSelect
          label="uf"
          :items="stateData"
          :track="{ field: 'sigla', name: 'nome' }"
          :controller="ufControler"
          :reference="apiFormData"
          referenceName="uf"
          required
        />
        <SGSDivider />

        <SGSSelect
          label="city"
          :items="cityData"
          :track="{ field: 'nome', name: 'nome' }"
          :controller="cityController"
          :reference="apiFormData"
          referenceName="nome"
          required
        />
        <SGSDivider />
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-city" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
