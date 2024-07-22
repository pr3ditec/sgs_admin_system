<script setup lang="ts">
/**
 * @description View para listagem de usuários
 * @active
 */
import type { ApiResponse, SearchController, User } from '@/Helpers/Types'
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
const userData: Ref<Array<User>> = ref([])

const searchInData = () => {
  searchController.value.result = userData.value.filter((value: User) => {
    if (value.nome.toLocaleLowerCase().includes(searchController.value.value.toLocaleLowerCase())) {
      return value
    }
  })
}
const getUserData = async () => {
  await request.get('/usuario').then((res: ApiResponse) => {
    if (res.status) {
      userData.value = res.list as Array<User>
      searchController.value.result = res.list as Array<any>
    } else {
      searchController.value.result = []
    }
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

watch(
  () => searchController.value.value,
  () => {
    searchInData()
  }
)
onMounted(() => {
  Promise.all([getUserData()]).catch((err) => {
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
      @editData="(id: Number) => router.push(`/users/${id}`)"
      @deleteData="deleteData"
    />
  </DefaultLayout>
</template>
