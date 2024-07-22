<script setup lang="ts">
/**
 * @description View para listagem de usuários
 * @active
 */
import type { ApiResponse, SearchController, TipoUsuario, User } from '@/Helpers/Types'
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
const userTypeData: Ref<Array<TipoUsuario>> = ref([])

const searchInData = () => {
  searchController.value.result = userTypeData.value.filter((value: TipoUsuario) => {
    if (value.nome.toLocaleLowerCase().includes(searchController.value.value.toLocaleLowerCase())) {
      return value
    }
  })
}
const getUserTypeData = async () => {
  await request.get('/tipo-usuario').then((res: ApiResponse) => {
    if (res.status) {
      userTypeData.value = res.list as Array<TipoUsuario>
      searchController.value.result = res.list as Array<any>
    } else {
      searchController.value.result = []
    }
  })
}
const deleteData = async (id: Number) => {
  await request.destroy(`/tipo-usuario/${id}`).then((res) => {
    if (res.status) {
      getUserTypeData()
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
  Promise.all([getUserTypeData()]).catch((err) => {
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
      @editData="(id: Number) => router.push(`/user/type/${id}`)"
      @deleteData="deleteData"
    />
  </DefaultLayout>
</template>
