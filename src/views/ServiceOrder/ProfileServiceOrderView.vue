<script setup lang="ts">
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSCheckbox from '@/components/Forms/SGSCheckbox.vue'
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
import { useGlobalStore } from '@/stores/global'
import Translate from '@/translate'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const request = useGlobalStore().request
const routeId = useRoute().params.id
const router = useRouter()

const numeroController: Ref<InputController> = ref(<InputController>{
  isDisabled: true,
  isEmpty: false
})

const nomeController: Ref<InputController> = ref(<InputController>{
  isDisabled: true,
  isEmpty: false
})

const serviceOrderController: Ref<ProfileDataController> = ref({
  notFound: false,
  isLoading: true
})

const buttonRemoveController: Ref<ButtonController> = ref(<ButtonController>{
  isDisabled: false,
  isLoading: false
})

const buttonUpdateController: Ref<ButtonController> = ref(<ButtonController>{
  isDisabled: false,
  isLoading: false
})

const serviceOrderData: Ref<any> = ref(<any>{})

const getData = async () => {
  await request
    .get(`/ordem-servico/${routeId}`)
    .then((res: ApiResponse) => {
      if (res.status) {
        serviceOrderData.value = res.list
      } else {
        serviceOrderController.value.notFound = true
      }
    })
    .finally(() => {
      serviceOrderController.value.isLoading = false
    })
}

const updateData = async () => {
  await request
    .update(`/ordem-servico/${routeId}`, {
      recebido: serviceOrderData.value.recebido,
      concluido: serviceOrderData.value.concluido
    })
    .then((res: ApiResponse) => {
      if (res.status) {
        Response.show('success', 'success')
      } else {
        throw new Error()
      }
    })
    .catch((err) => {
      Response.show('error', 'update-os-error')
      console.log('Erro')
    })
}

const deleteData = async () => {
  await request
    .destroy(`/ordem-servico/${routeId}`)
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
    console.log('Erro ao buscar dados de api....')
  })
})
</script>
<template>
  <DefaultLayout>
    <FormLayout
      title="profile-service-order"
      :push="{ label: 'list-service-order', to: '/service-order/list' }"
    >
      <template #body>
        <div v-if="serviceOrderController.isLoading">loading ...</div>
        <div v-else>
          <SGSInput
            label="number"
            :reference="serviceOrderData"
            referenceName="numero"
            :controller="numeroController"
            disabled
          />
          <SGSDivider />
          <SGSInput
            label="client"
            :reference="serviceOrderData"
            referenceName="nome"
            :controller="nomeController"
            disabled
          />
          <SGSDivider />
          <div class="flex flex-col">
            <SGSCheckbox label="finished" :reference="serviceOrderData" referenceName="concluido" />
            <SGSCheckbox label="payed" :reference="serviceOrderData" referenceName="recebido" />
          </div>
          <SGSDivider />
          <div v-for="equipamento in serviceOrderData['equipamentos']">
            <SGSInput
              label="equipment"
              :reference="equipamento"
              referenceName="nome"
              :controller="nomeController"
              disabled
            />
            <SGSDivider />
            <select
              class="w-full rounded border-[1.5px] text-black border-stroke py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark bg-white dark:bg-form-input dark:focus:border-primary"
            >
              <option>{{ Translate.to('services') }}</option>
              <option v-for="servico in equipamento.servicos">
                {{ servico.descricao }}
              </option>
            </select>
            <hr class="hr" />
          </div>
        </div>
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
