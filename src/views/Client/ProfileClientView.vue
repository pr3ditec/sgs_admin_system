<script lang="ts" setup>
//@ts-nocheck
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSAddress from '@/components/Forms/SGSAddress.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import { Response } from '@/Helpers/Response'
import type {
  ApiResponse,
  ButtonController,
  InputController,
  ProfileDataController
} from '@/Helpers/Types'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import router from '@/router'
import { useGlobalStore } from '@/stores/global'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const request = useGlobalStore().request
const routeId = useRoute().params.id

const clienteDataController: Ref<ProfileDataController> = ref({
  isLoading: true,
  notFound: false
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

const buttonRemoveController: Ref<ButtonController> = ref(<ButtonController>{
  isDisabled: false,
  isLoading: false
})

const buttonUpdateController: Ref<ButtonController> = ref(<ButtonController>{
  isDisabled: false,
  isLoading: false
})

const clienteData: Ref<Object> = ref(<Object>{})

const getData = async () => {
  await request
    .get(`/cliente/${routeId}`)
    .then((res: ApiResponse) => {
      if (res.status) {
        clienteData.value = res.list
      } else {
        clienteDataController.value.notFound = true
      }
    })
    .finally(() => {
      clienteDataController.value.isLoading = false
    })
}

const updateData = async () => {
  const cleanerClienteData = Object.fromEntries(
    Object.entries(clienteData.value).filter(([_, v]) => v != null)
  )
  await request
    .update(`/cliente/${routeId}`, cleanerClienteData)
    .then((res: ApiResponse) => {
      console.log(res)
      if (res.status) {
        Response.show('success', 'success')
      } else {
        throw new Error()
      }
    })
    .catch((err) => {
      Response.show('error', 'update-os-error')
    })
}

const deleteData = async () => {
  await request
    .destroy(`/cliente/${routeId}`)
    .then((res: ApiResponse) => {
      if (res.status) {
        Response.show('success', res.messageCode)
      } else {
        Response.show('error', res.messageCode)
      }
    })
    .finally(() => {
      setTimeout(() => router.push('/service-order/list'), 2)
    })
}

onMounted(() => {
  Promise.all([getData()]).catch((err) => {
    console.log('Error on retrieving data')
  })
})
</script>
<template>
  <DefaultLayout>
    <div v-if="clienteDataController.isLoading">Loading.....</div>
    <FormLayout v-else title="client" :push="{ label: 'list-client', to: '/client/list' }">
      <template #body>
        <SGSInput
          label="name"
          required
          :reference="clienteData"
          referenceName="nome"
          :controller="nomeController"
        />
        <SGSDivider />
        <SGSInput
          label="phone"
          :mask="'(##)#####-####'"
          required
          :reference="clienteData"
          referenceName="telefone"
          :controller="telefoneController"
        />
        <SGSDivider />
        <SGSInput
          :mask="'#####-###'"
          label="cep"
          required
          :reference="clienteData"
          referenceName="cep"
          :controller="cepController"
        />
        <SGSAddress>
          <template #cep> </template>
          <template #logradouro>
            <SGSInput
              label="logradouro"
              required
              :reference="clienteData"
              referenceName="logradouro"
              :controller="logradouroController"
            />
          </template>
          <template #numero>
            <SGSInput
              label="number"
              :mask="'XXXXX'"
              required
              :reference="clienteData"
              referenceName="numero"
              :controller="numeroController"
            />
          </template>
          <template #complemento>
            <SGSInput
              label="complement"
              :reference="clienteData"
              referenceName="complemento"
              :controller="complementoController"
            />
          </template>
          <template #cidade>
            <SGSInput
              label="city"
              :controller="cidadeController"
              :reference="clienteData"
              referenceName="cidade"
              required
            />
          </template>
        </SGSAddress>
        <SGSDivider />

        <!-- CASO SEJA UMA PESSOA FISICA AQUI VAI O CPF -->
        <SGSInput
          v-if="clienteData.cpf"
          label="cpf"
          :mask="'###.###.###-##'"
          :reference="clienteData"
          referenceName="cpf"
          :controller="cpfController"
        />

        <SGSInput
          v-if="clienteData.cnpj"
          label="cnpj"
          :mask="'##.###.###/####-##'"
          :reference="clienteData"
          referenceName="cnpj"
          :controller="cnpjController"
        />
        <SGSDivider />
        <SGSInput
          v-if="clienteData.inscricao_estadual"
          label="state-register"
          :mask="'###############'"
          :reference="clienteData"
          referenceName="inscricao_estadual"
          :controller="inscricaoEstadualController"
        />
        <SGSDivider />
        <SGSInput
          v-if="clienteData.inscricao_municipal"
          label="local-register"
          :mask="'###############'"
          :reference="clienteData"
          referenceName="inscricao_municipal"
          :controller="inscricaoMunicipalController"
        />
      </template>
      <template #handler>
        <div class="flex flex-row gap-3">
          <SGSButton @click="updateData" label="update" :controller="buttonRemoveController" />
          <SGSButton
            @click="deleteData"
            label="delete"
            :controller="buttonUpdateController"
            overlayClass="bg-slate-700"
          />
        </div>
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
