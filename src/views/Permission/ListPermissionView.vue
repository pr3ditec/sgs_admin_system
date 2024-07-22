<script setup lang="ts">
/**
 * @description View para listagem de usuários
 * @active
 */
import type { ApiResponse, SearchController, Permissao } from '@/Helpers/Types'
import { onMounted, ref, watch, type Ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useGlobalStore } from '@/stores/global'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSTable from '@/components/Forms/SGSTable.vue'
import { Response } from '@/Helpers/Response'
import { useRouter } from 'vue-router'

const router = useRouter()
const request = useGlobalStore().request

const searchController: Ref<SearchController> = ref({
  value: '',
  result: []
})
const permissionData: Ref<Array<Permissao>> = ref([])

const searchInData = () => {
  searchController.value.result = permissionData.value.filter((value: Permissao) => {
    if (value.nome.toLocaleLowerCase().includes(searchController.value.value.toLocaleLowerCase())) {
      return value
    }
  })
}
const getPermissionData = async () => {
  await request.get('/permissao').then((res: ApiResponse) => {
    if (res.status) {
      permissionData.value = res.list as Array<Permissao>
      searchController.value.result = res.list as Array<any>
    } else {
      searchController.value.result = []
    }
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

watch(
  () => searchController.value.value,
  () => {
    searchInData()
  }
)
onMounted(() => {
  Promise.all([getPermissionData()]).catch((err) => {
    console.log('Erro em buscar dados da api')
  })
})
</script>
<template>
  <DefaultLayout>
    <SGSInput :reference="searchController" referenceName="value" />
    <SGSDivider />
    <SGSTable
      :search="searchController.value"
      :result="searchController.result"
      @editData="(id: Number) => router.push(`/permissao/${id}`)"
      @deleteData="deleteData"
    />
  </DefaultLayout>
</template>
