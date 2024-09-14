<script setup lang="ts">
import type { ApiResponse, ProfileDataController } from '@/Helpers/Types'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import { useGlobalStore } from '@/stores/global'
import Translate from '@/translate'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const request = useGlobalStore().request
const routeId = useRoute().params.id

const serviceOrderController: Ref<ProfileDataController> = ref({
  notFound: false,
  isLoading: true
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
          {{ serviceOrderData }}
          <hr />
          <div class="flex flex-row gap-2">
            <p>{{ Translate.to('number') + ':\t' }}</p>
            <p>{{ serviceOrderData.numero }}</p>
          </div>
        </div>
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
