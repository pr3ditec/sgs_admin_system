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

const numeroSerieController: Ref<InputController> = ref(<InputController>{
  isDisabled: true,
  isEmpty: false
})

const nomeController: Ref<InputController> = ref(<InputController>{
  isDisabled: true,
  isEmpty: false
})

const tipoController: Ref<InputController> = ref(<InputController>{
  isDisabled: true,
  isEmpty: false
})

const equipmentController: Ref<ProfileDataController> = ref({
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

const equipmentData: Ref<any> = ref(<any>{})

const getData = async () => {
  await request
    .get(`/aparelho/${routeId}`)
    .then((res: ApiResponse) => {
      if (res.status) {
        equipmentData.value = res.list
      } else {
        equipmentController.value.notFound = true
      }
    })
    .finally(() => {
      equipmentController.value.isLoading = false
    })
}

const updateData = async () => {
  await request
    .update(`/aparelho/${routeId}`, equipmentData.value)
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
    .destroy(`/aparelho/${routeId}`)
    .then((res: ApiResponse) => {
      if (res.status) {
        Response.show('success', res.messageCode)
      } else {
        Response.show('error', res.messageCode)
      }
    })
    .finally(() => {
      setTimeout(() => router.push('/equipment/list'), 2)
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
      title="profile-equipment"
      :push="{ label: 'list-equipment', to: '/equipment/list' }"
    >
      <template #body>
        <div v-if="equipmentController.isLoading">loading ...</div>
        <div v-else>
          <SGSInput
            label="number"
            :reference="equipmentData"
            referenceName="numero_serie"
            :controller="numeroSerieController"
          />
          <SGSDivider />
          <SGSInput
            label="name"
            :reference="equipmentData"
            referenceName="nome"
            :controller="nomeController"
          />
          <SGSDivider />
          <SGSInput
            label="type"
            :reference="equipmentData"
            referenceName="tipo"
            :controller="tipoController"
          />
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
