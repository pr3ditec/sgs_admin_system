<script setup lang="ts">
/**
 * @description View para listagem de usuários
 * @active
 */
import type { ApiResponse, HeaderTableController, TableCotnroller, Aparelho } from '@/Helpers/Types'
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
  // {
  //   field: 'id',
  //   title: '#',
  //   headerClass: 'flex flex-row gap-1 font-bold uppercase'
  // },
  {
    field: 'nome',
    title: Translate.to('name'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'tipo',
    title: Translate.to('type'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'cliente_nome',
    title: Translate.to('client'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'actions',
    title: Translate.to('actions'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  }
])

const aparelhoData: Ref<Array<Aparelho>> = ref([])

const getAparelhoData = async () => {
  tableController.value.isLoading = true
  await request
    .get('/aparelho')
    .then((res: ApiResponse) => {
      if (res.status) {
        aparelhoData.value = res.list as Array<Aparelho>
      }
    })
    .finally(() => {
      tableController.value.isLoading = false
    })
}
const deleteData = async (id: Number) => {
  await request.destroy(`/aparelho/${id}`).then((res) => {
    if (res.status) {
      getAparelhoData()
      Response.show('success', res.messageCode)
    } else {
      Response.show('error', res.messageCode)
    }
  })
}

onMounted(() => {
  Promise.all([getAparelhoData()]).catch((err) => {
    console.log('Erro em buscar dados da api')
  })
})
</script>
<template>
  <DefaultLayout>
    <FormLayout
      @helper="Response.helperList()"
      title="equipment"
      :push="{ label: 'create-equipment', to: '/equipment/create' }"
    >
      <template #body>
        <SGSTable
          :isLoading="tableController.isLoading"
          :result="aparelhoData"
          :header="headerController"
          @editData="(id: Number) => router.push(`/equipment/${id}`)"
          @deleteData="deleteData"
        />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
