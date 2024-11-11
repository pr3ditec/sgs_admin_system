<script setup lang="ts">
/**
 * @description View para cadastro de usuários
 * @active
 */
import { onMounted, ref, watch, type Ref } from 'vue'
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
import Translate from '@/translate'

const request = useGlobalStore().request

const personTypeController = ref(0)

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

const cidadeController: Ref<InputController> = ref({
  isEmpty: false,
  isDisabled: false
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

const telefoneController: Ref<InputController> = ref({
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
  telefone: '',
  cidade: '',
  usuario_id: 0
})
var apiFormDataSanitazied: Cliente = <Cliente>{}

const sanitazeData = async () => {
  apiFormDataSanitazied = { ...apiFormData.value }
  try {
    //@ts-expect-error
    apiFormDataSanitazied.cpf = apiFormDataSanitazied.cpf.replace(/\D/g, '')
  } catch (e) {
    try {
      //@ts-expect-error
      apiFormDataSanitazied.cnpj = apiFormDataSanitazied.cnpj.replace(/\D/g, '')
    } catch (e) {}
  }
  apiFormDataSanitazied.cep = apiFormDataSanitazied.cep.replace(/\D/g, '')
  apiFormDataSanitazied.telefone = apiFormDataSanitazied.telefone.replace(/\D/g, '')

  return apiFormDataSanitazied
}

const validateData = (): boolean => {
  const isValidNome = validateInputParameter(nomeController.value, apiFormData.value.nome)
  const isValidLogradouro = validateInputParameter(
    logradouroController.value,
    apiFormData.value.logradouro
  )
  const isValidCep = validateInputParameter(cepController.value, apiFormData.value.cep)
  const isValidNumero = validateInputParameter(numeroController.value, apiFormData.value.numero)
  const isValidCidade = validateInputParameter(cidadeController.value, apiFormData.value.cidade)
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

const destroyItem = (items: Array<string>) => {
  items.forEach((item) => {
    //@ts-expect-error
    delete apiFormData.value[item]
  })
}

const sendData = async () => {
  buttonHandler(buttonController.value, true)
  const insertData = await sanitazeData()
  if (!validateData()) {
    return buttonHandler(buttonController.value, false)
  }
  await request
    .store('/cliente', insertData)
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
      clearClientData(apiFormData.value)
    })
}

const searchByCep = async () => {
  if (apiFormData.value.cep.length < 9) {
    return
  }
  const trimmed_cep = apiFormData.value.cep.replace(/\D/g, '')
  await request
    .get(`https://viacep.com.br/ws/${trimmed_cep}/json/`)
    .then((res: any) => {
      console.log(res)
      apiFormData.value.logradouro = res.logradouro
      apiFormData.value.cidade = res.localidade
    })
    .catch((err) => {
      console.log('Erro ao buscar dados de cep')
    })
}

watch(
  () => apiFormData.value.cep,
  () => searchByCep()
)

watch(personTypeController, () => {
  if (personTypeController.value == 1) {
    //@ts-expect-error
    delete apiFormData.value['cpf']
  } else {
    //@ts-expect-error
    delete apiFormData.value['cnpj']
    //@ts-expect-error
    delete apiFormData.value['inscricao_estadual']
    //@ts-expect-error
    delete apiFormData.value['inscricao_municipal']
  }
})

onMounted(() => {
  bindKey('Enter', sendData)
  // apiFormData.value.usuario_id = getSessionUser() as number
  apiFormData.value.usuario_id = 1
})
</script>


<style scoped>
.small-width {
  width: 500px; /* ajuste a largura conforme necessário */
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
    <div class="flex flex-col items-center">
      <p><strong>Selecione o tipo de pessoa</strong> </p>
      <div class="flex flex-row gap-2 mx-auto">
        <label>{{ Translate.to('normal-person') }}</label>
        <input type="radio" name="register" v-model="personTypeController" value="0" />
        <label>{{ Translate.to('juridic-person') }}</label>
        <input type="radio" name="register" v-model="personTypeController" value="1" />
      </div>
    </div>

    <FormLayout
      v-if="personTypeController == 0"
      @helper="Response.helperCreateFormOrder('register-client-helper-text')"
      title="create-client"
      :push="{ label: 'list-client', to: '/client/list' }"
    >
      <template #body>
        <div class="flex-row">
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
          class="small-width1"
          label="phone"
          :mask="'(##)#####-####'"
          required
          :reference="apiFormData"
          referenceName="telefone"
          :controller="telefoneController"
        />
        <SGSDivider />

        <SGSInput
          class="small-width2"
          :mask="'#####-###'"
          label="cep"
          required
          :reference="apiFormData"
          referenceName="cep"
          :controller="cepController"
        />
        </div>
        
        
        <SGSAddress>
          <template #cep> </template>
          <template #logradouro>
            <SGSInput
            class="small-width3"
              label="logradouro"
              required
              :reference="apiFormData"
              referenceName="logradouro"
              :controller="logradouroController"
            />
          </template>
          <template #numero>
            <SGSInput
            class="small-width2"
              label="number"
              :mask="'XXXXX'"
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
            <SGSInput
            class="small-width3"
              label="city"
              :controller="cidadeController"
              :reference="apiFormData"
              referenceName="cidade"
              required
            />
          </template>
        </SGSAddress>
        <SGSDivider />

        <!-- CASO SEJA UMA PESSOA FISICA AQUI VAI O CPF -->
        <SGSInput
          label="cpf"
          :mask="'###.###.###-##'"
          :reference="apiFormData"
          referenceName="cpf"
          :controller="cpfController"
        />

        <!-- CASO SEJA UMA PESSOA JURIDICA AQUI VAI O CNPJ E OUTROS DADOS -->
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-client" :controller="buttonController" />
      </template>
    </FormLayout>

    <!-- PESSOA JURIDICA -->

    <FormLayout
      v-if="personTypeController == 1"
      title="create-client"
      :push="{ label: 'list-client', to: '/client/list' }"
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
        <SGSInput
          label="phone"
          :mask="'(##)#####-####'"
          required
          :reference="apiFormData"
          referenceName="telefone"
          :controller="telefoneController"
        />
        <SGSDivider />
        <SGSInput
          :mask="'#####-###'"
          label="cep"
          required
          :reference="apiFormData"
          referenceName="cep"
          :controller="cepController"
        />
        <SGSAddress>
          <template #cep> </template>
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
              :mask="'#####'"
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
            <SGSInput
              label="city"
              :controller="cidadeController"
              :reference="apiFormData"
              referenceName="cidade"
              required
            />
          </template>
        </SGSAddress>
        <SGSDivider />

        <!-- CASO SEJA UMA PESSOA JURIDICA AQUI VAI O CNPJ E OUTROS DADOS -->
        <SGSInput
          label="cnpj"
          :mask="'##.###.###/####-##'"
          :reference="apiFormData"
          referenceName="cnpj"
          :controller="cnpjController"
        />
        <SGSDivider />
        <SGSInput
          label="state-register"
          :mask="'###############'"
          :reference="apiFormData"
          referenceName="inscricao_estadual"
          :controller="inscricaoEstadualController"
        />
        <SGSDivider />
        <SGSInput
          label="local-register"
          :mask="'###############'"
          :reference="apiFormData"
          referenceName="inscricao_municipal"
          :controller="inscricaoMunicipalController"
        />
      </template>
      <template #handler>
        <SGSButton @click="sendData" label="create-client" :controller="buttonController" />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
