<script setup lang="ts">
import SGSButton from '@/components/Buttons/SGSButton.vue'
import SGSCheckbox from '@/components/Forms/SGSCheckbox.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSMoneyInput from '@/components/Forms/SGSMoneyInput.vue'
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

const descricaoController: Ref<InputController> = ref(<InputController>{
  isDisabled: true,
  isEmpty: false
})

const precoController: Ref<InputController> = ref(<InputController>{
  isDisabled: true,
  isEmpty: false
})

const valorController: Ref<InputController> = ref(<InputController>{
  isDisabled: true,
  isEmpty: false
})

const serviceController: Ref<ProfileDataController> = ref({
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

const serviceData: Ref<any> = ref(<any>{})

const getData = async () => {
  await request
    .get(`/servico/${routeId}`)
    .then((res: ApiResponse) => {
      if (res.status) {
        serviceData.value = res.list
      } else {
        serviceController.value.notFound = true
      }
    })
    .finally(() => {
      serviceController.value.isLoading = false
    })
}

const sanitazeMoney = () => {
  serviceData.value.preco = serviceData.value.preco.substring(3)
}

const updateData = async () => {
  sanitazeMoney()
  await request
    .update(`/servico/${routeId}`, serviceData.value)
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
    .destroy(`/servico/${routeId}`)
    .then((res: ApiResponse) => {
      if (res.status) {
        Response.show('success', res.messageCode)
      } else {
        Response.show('error', res.messageCode)
      }
    })
    .finally(() => {
      setTimeout(() => router.push('/service/list'), 2)
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
    <FormLayout title="profile-service" :push="{ label: 'list-service', to: '/service/list' }">
      <template #body>
        <div v-if="serviceController.isLoading">loading ...</div>
        <div v-else>
          {{ serviceData }}
          <SGSInput
            label="description"
            :reference="serviceData"
            referenceName="descricao"
            :controller="descricaoController"
          />
          <SGSDivider />
          <SGSMoneyInput
            label="price"
            :reference="serviceData"
            referenceName="preco"
            :controller="precoController"
          />
          <SGSDivider />
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
