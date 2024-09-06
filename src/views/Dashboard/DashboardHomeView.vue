<script setup lang="ts">
import LocalStorageController from '@/Helpers/LocalStorage'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useGlobalStore } from '@/stores/global'
import SectionServiceDashboard from './SectionServiceDashboard.vue'
import SectionOlderServiceDashboard from './SectionOlderServiceDashboard.vue'
import Translate from '@/translate'
import { onMounted, ref, type Ref } from 'vue'
import type { ApiResponse } from '@/Helpers/Types'

const usuarioData = LocalStorageController.getUser()

const request = useGlobalStore().request

const dashboardDataController: Ref<boolean> = ref(false)
const dashboardData: Ref<Array<Object>> = ref([])

const getData = async () => {
  await request.get('/dashboard').then((res: ApiResponse) => {
    if (res.status) {
      dashboardData.value = res.list as Array<Object>
    }
  })
}

onMounted(() => {
  Promise.all([getData()]).catch((err) => {
    console.log('Erro ao inicializar a aplicação')
  })
})
</script>
<template>
  <DefaultLayout>
    <main v-if="usuarioData.tipo == 'ADMINISTRADOR'">
      {{ Translate.to('admin-welcome') }}
    </main>
    <main v-else class="flex flex-col gap-2 h-screen w-full">
      <SectionServiceDashboard
        :parametros="
          //@ts-expect-error
          dashboardData['parametros']
        "
      />
      <SectionOlderServiceDashboard
        @refreshData="() => getData()"
        title="Serviços com mais de 6 meses"
        :tableData="
          //@ts-expect-error
          dashboardData['ordem_servico']
        "
      />
    </main>
  </DefaultLayout>
</template>
