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
  InputController,
  Cliente,
  SelectController,
  Cidade
} from '@/Helpers/Types'
import { buttonHandler, validateInputParameter, validateSelectParameter } from '@/Helpers/Validator'
import { Response } from '@/Helpers/Response'
import { clearClientData } from '@/Helpers/Free'
import { bindKey } from '@/Helpers/Binder'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSSelect from '@/components/Forms/SGSSelect.vue'
import SGSAddress from '@/components/Forms/SGSAddress.vue'
import SGSOptional from '@/components/Forms/SGSOptional.vue'
import Translate from '@/translate'

const request = useGlobalStore().request

const buttonController: Ref<ButtonController> = ref({
  isLoading: false,
  isDisabled: false
})

const nomeController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const logradouroController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const cepController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const complementoController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const numeroController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
})

const cidadeController: Ref<SelectController> = ref({
  isEmpty: false,
  notFound: false,
  isDisabled: true
})

const cpfController: Ref<InputController> = ref({
  isDisabled: false,
  isEmpty: false
})

const cnpjController: Ref<InputController> = ref({
  isDisabled: false,
  isEmpty: false
})

const inscricaoEstadualController: Ref<InputController> = ref({
  isDisabled: false,
  isEmpty: false
})

const inscricaoMunicipalController: Ref<InputController> = ref({
  isDisabled: false,
  isEmpty: false
})

const cidadeData: Ref<Array<Cidade>> = ref([])
//@ts-expect-error
const apiFormData: Ref<Cliente> = ref(<Cliente>{
  nome: '',
  logradouro: '',
  cep: '',
  complemento: '',
  numero: '',
  cidade_id: 0
})

const validateData = (): boolean => {
  const isValidNome = validateInputParameter(nomeController.value, apiFormData.value.nome)
  const isValidLogradouro = validateInputParameter(
    logradouroController.value,
    apiFormData.value.logradouro
  )
  const isValidCep = validateInputParameter(cepController.value, apiFormData.value.cep)
  const isValidNumero = validateInputParameter(numeroController.value, apiFormData.value.numero)
  const isValidCidade = validateSelectParameter(cidadeController.value, apiFormData.value.cidade_id)
  const isValidDocuments = !apiFormData.value.cpf && !apiFormData.value.cnpj ? false : true

  return (
    isValidNome &&
    isValidLogradouro &&
    isValidCep &&
    isValidNumero &&
    isValidCidade &&
    isValidDocuments
  )
}

const getCidadeData = async () => {
  await request.get('/cidade').then((res: ApiResponse) => {
    if (res.status) {
      cidadeData.value = res.list as Array<Cidade>
      cidadeController.value.isDisabled = false
    } else {
      cidadeController.value.notFound = true
    }
  })
}

const destroyItem = (items: Array<string>) => {
  items.forEach((item) => {
    //@ts-expect-error
    delete apiFormData.value[item]
  })
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)

  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }
  await request
    .store('/cliente', apiFormData.value)
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
      clearClientData(apiFormData.value)
    })
}

onMounted(() => {
  Promise.all([getCidadeData()]).catch((err) => {
    console.log('Erro ao buscar dados de api')
  })
  bindKey('Enter', sendData)
})
</script>
<template>
  <DefaultLayout>
    <FormLayout title="create-client">
      <template #body>
        <SGSInput
          label="name"
          required
          :reference="apiFormData"
          referenceName="nome"
          :controller="nomeController"
        />
        <SGSDivider />
        <SGSAddress>
          <template #cep>
            <SGSInput
              label="cep"
              required
              :reference="apiFormData"
              referenceName="cep"
              :controller="cepController"
            />
          </template>
          <template #logradouro>
            <SGSInput
              label="logradouro"
              required
              :reference="apiFormData"
              referenceName="logradouro"
              :controller="logradouroController"
            />
          </template>
          <template #numero>
            <SGSInput
              label="number"
              required
              :reference="apiFormData"
              referenceName="numero"
              :controller="numeroController"
            />
          </template>
          <template #complemento>
            <SGSInput
              label="complement"
              :reference="apiFormData"
              referenceName="complemento"
              :controller="complementoController"
            />
          </template>
          <template #cidade>
            <SGSSelect
              label="city"
              :items="cidadeData"
              :track="{ field: 'id', name: 'nome' }"
              :controller="cidadeController"
              :reference="apiFormData"
              referenceName="cidade_id"
              required
            />
          </template>
        </SGSAddress>
        <SGSDivider />

        <!-- CASO SEJA UMA PESSOA FISICA AQUI VAI O CPF -->
        <SGSOptional v-if="!apiFormData.cnpj" label="normal-person" @destroy="destroyItem(['cpf'])">
          <SGSInput
            label="cpf"
            :reference="apiFormData"
            referenceName="cpf"
            :controller="cpfController"
          />
        </SGSOptional>

        <!-- CASO SEJA UMA PESSOA JURIDICA AQUI VAI O CNPJ E OUTROS DADOS -->
        <SGSOptional
          v-if="!apiFormData.cpf"
          label="juridic-person"
          @destroy="destroyItem(['cnpj', 'inscricao_municipal', 'inscricao_estadual'])"
        >
          <SGSInput
            label="cnpj"
            :reference="apiFormData"
            referenceName="cnpj"
            :controller="cnpjController"
          />
          <SGSDivider />
          <SGSInput
            label="state-register"
            :reference="apiFormData"
            referenceName="inscricao_estadual"
            :controller="inscricaoEstadualController"
          />
          <SGSDivider />
          <SGSInput
            label="local-register"
            :reference="apiFormData"
            referenceName="inscricao_municipal"
            :controller="inscricaoMunicipalController"
          />
        </SGSOptional>
        <p class="lowercase text-red" v-show="!apiFormData.cpf && !apiFormData.cnpj">
          {{ Translate.to('person-type') }}
        </p>
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-client" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
