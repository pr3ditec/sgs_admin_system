<script setup lang="ts">
/**
 * @description View para listagem de usuários
 * @active
 */
import type { ApiResponse, HeaderTableController, TableCotnroller, Usuario } from '@/Helpers/Types'
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
    field: 'email',
    title: Translate.to('email'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'tipo_usuario_nome',
    title: Translate.to('user-type'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'actions',
    title: Translate.to('actions'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  }
])

const userData: Ref<Array<Usuario>> = ref([])

const getUserData = async () => {
  tableController.value.isLoading = true
  await request
    .get('/usuario')
    .then((res: ApiResponse) => {
      if (res.status) {
        userData.value = res.list as Array<Usuario>
      }
    })
    .finally(() => {
      tableController.value.isLoading = false
    })
}
const deleteData = async (id: Number) => {
  await request.destroy(`/usuario/${id}`).then((res) => {
    if (res.status) {
      getUserData()
      Response.show('success', res.messageCode)
    } else {
      Response.show('error', res.messageCode)
    }
  })
}

onMounted(() => {
  Promise.all([getUserData()]).catch((err) => {
    console.log('Erro em buscar dados da api')
  })
})
</script>
<template>
  <DefaultLayout>
    <SGSTable
      :isLoading="tableController.isLoading"
      :header="headerController"
      :result="userData"
      @editData="(id: Number) => router.push(`/users/${id}`)"
      @deleteData="deleteData"
    />
    <SGSTableHelper />
  </DefaultLayout>
</template>
