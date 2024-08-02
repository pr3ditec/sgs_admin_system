<script setup lang="ts">
/**
 * @description View para listagem de usuários
 * @active
 */
import type {
  ApiResponse,
  HeaderTableController,
  TableCotnroller,
  TipoUsuario
} from '@/Helpers/Types'
import { onMounted, ref, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import { Response } from '@/Helpers/Response'
import { useRouter } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SGSTable from '@/components/Tables/SGSTable.vue'
import Translate from '@/translate'
import SGSTableHelper from '@/components/Tables/SGSTableHelper.vue'

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
    field: 'nome',
    title: Translate.to('name'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'cidade_nome',
    title: Translate.to('city'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'actions',
    title: Translate.to('actions'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  }
])

const clientData: Ref<Array<TipoUsuario>> = ref([])

const getClientData = async () => {
  tableController.value.isLoading = true
  await request
    .get('/cliente')
    .then((res: ApiResponse) => {
      if (res.status) {
        clientData.value = res.list as Array<TipoUsuario>
      }
    })
    .finally(() => {
      tableController.value.isLoading = false
    })
}
const deleteData = async (id: Number) => {
  await request.destroy(`/cliente/${id}`).then((res) => {
    if (res.status) {
      getClientData()
      Response.show('success', res.messageCode)
    } else {
      Response.show('error', res.messageCode)
    }
  })
}

onMounted(() => {
  Promise.all([getClientData()]).catch((err) => {
    console.log('Erro em buscar dados da api')
  })
})
</script>
<template>
  <DefaultLayout>
    <SGSTable
      :isLoading="tableController.isLoading"
      :result="clientData"
      :header="headerController"
      @editData="(id: Number) => router.push(`/client/${id}`)"
      @deleteData="deleteData"
    />
    <SGSTableHelper />
  </DefaultLayout>
</template>
