<script setup lang="ts">
/**
 * @description View para listagem de usuários
 * @active
 */
import type {
  ApiResponse,
  Permissao,
  TableCotnroller,
  HeaderTableController
} from '@/Helpers/Types'
import { onMounted, ref, type Ref } from 'vue'
import { useGlobalStore } from '@/stores/global'
import { Response } from '@/Helpers/Response'
import { useRouter } from 'vue-router'
import Translate from '@/translate'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SGSTable from '@/components/Tables/SGSTable.vue'
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
    field: 'nome',
    title: Translate.to('name'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'actions',
    title: Translate.to('actions'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  }
])

const permissionData: Ref<Array<Permissao>> = ref([])

const getPermissionData = async () => {
  tableController.value.isLoading = true

  await request
    .get('/permissao')
    .then((res: ApiResponse) => {
      if (res.status) {
        permissionData.value = res.list as Array<Permissao>
      }
    })
    .finally(() => {
      tableController.value.isLoading = false
    })
}
const deleteData = async (id: Number) => {
  await request.destroy(`/permissao/${id}`).then((res) => {
    if (res.status) {
      getPermissionData()
      Response.show('success', res.messageCode)
    } else {
      Response.show('error', res.messageCode)
    }
  })
}

onMounted(() => {
  Promise.all([getPermissionData()]).catch((err) => {
    console.log('Erro em buscar dados da api')
  })
})
</script>
<template>
  <DefaultLayout>
    <FormLayout
      title="permission"
      :push="{ label: 'create-permission', to: '/permission/create' }"
      :back="{ label: 'add-permission', to: '/permission/add' }"
    >
      <template #body>
        <SGSTable
          :result="permissionData"
          :isLoading="tableController.isLoading"
          :header="headerController"
          @editData="(id: Number) => router.push(`/permissao/${id}`)"
          @deleteData="deleteData"
        />
      </template>
    </FormLayout>
  </DefaultLayout>
</template>
