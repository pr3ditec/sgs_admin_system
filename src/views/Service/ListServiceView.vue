<script setup lang="ts">
/**
 * @description View para listagem de usuários
 * @active
 */
import type { ApiResponse, HeaderTableController, TableCotnroller, Cidade } from '@/Helpers/Types'
import { onMounted, ref, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import { Response } from '@/Helpers/Response'
import { useRouter } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SGSTable from '@/components/Tables/SGSTable.vue'
import Translate from '@/translate'
import SGSTableHelper from '@/components/Tables/SGSTableHelper.vue'
import FormLayout from '@/layouts/FormLayout.vue'

const router = useRouter()
const request = useGlobalStore().request

const tableController: Ref<TableCotnroller> = ref({
  isLoading: false
})

const headerController: Ref<Array<HeaderTableController>> = ref([
  {
    field: 'id',
    title: '#',
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'descricao',
    title: Translate.to('description'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'preco',
    title: Translate.to('price') + ' (R$)',
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'actions',
    title: Translate.to('actions'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  }
])

const serviceData: Ref<Array<any>> = ref([])

const getServiceData = async () => {
  tableController.value.isLoading = true
  await request
    .get('/servico')
    .then((res: ApiResponse) => {
      if (res.status) {
        serviceData.value = res.list as Array<Cidade>
      }
    })
    .finally(() => {
      tableController.value.isLoading = false
    })
}
const deleteData = async (id: Number) => {
  await request.destroy(`/cidade/${id}`).then((res) => {
    if (res.status) {
      getServiceData()
      Response.show('success', res.messageCode)
    } else {
      Response.show('error', res.messageCode)
    }
  })
}

onMounted(() => {
  Promise.all([getServiceData()]).catch((err) => {
    console.log('Erro em buscar dados da api')
  })
})
</script>
<template>
  <DefaultLayout>
    <FormLayout title="services" :push="{ label: 'create-service', to: '/service/create' }">
      <template #body>
        <SGSTable
          :isLoading="tableController.isLoading"
          :result="serviceData"
          :header="headerController"
          @editData="(id: Number) => router.push(`/city/${id}`)"
          @deleteData="deleteData"
        />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
