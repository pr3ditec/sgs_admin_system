<script setup lang="ts">
import SGSTable from '@/components/Tables/SGSTable.vue'
import { Response } from '@/Helpers/Response'
import type {
  ApiResponse,
  HeaderTableController,
  OrdemServico,
  TableCotnroller
} from '@/Helpers/Types'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FormLayout from '@/layouts/FormLayout.vue'
import { useGlobalStore } from '@/stores/global'
import Translate from '@/translate'
import { onMounted, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

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
    field: 'numero',
    title: Translate.to('number'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'recebido',
    title: Translate.to('payed'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase',
    //@ts-expect-error
    cellRenderer: (data) => {
      return data.recebido ? Translate.to('yes') : Translate.to('no')
    }
  },
  {
    field: 'cliente.nome',
    title: Translate.to('client'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'actions',
    title: Translate.to('actions'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  }
])

const serviceOrderData: Ref<Array<OrdemServico>> = ref([])

const getServiceOrderData = async () => {
  tableController.value.isLoading = true
  await request
    .get('/ordem-servico')
    .then((res: ApiResponse) => {
      if (res.status) {
        serviceOrderData.value = res.list as Array<OrdemServico>
      }
    })
    .finally(() => {
      tableController.value.isLoading = false
    })
}
const deleteData = async (id: Number) => {
  await request.destroy(`/ordem-servico/${id}`).then((res: ApiResponse) => {
    if (res.status) {
      getServiceOrderData()
      Response.show('success', res.messageCode)
    } else {
      Response.show('error', res.messageCode)
    }
  })
}

onMounted(() => {
  Promise.all([getServiceOrderData()]).catch((err) => {
    console.log('Erro ao buscar dados de api')
  })
})
</script>
<template>
  <DefaultLayout>
    <FormLayout
      title="service-order"
      :push="{ label: 'create-service-order', to: '/service-order/create' }"
    >
      <template #body>
        <SGSTable
          :isLoading="tableController.isLoading"
          :header="headerController"
          :result="serviceOrderData"
          @editData="(id: Number) => router.push(`/service-order/${id}`)"
          @deleteData="deleteData"
        />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
