<script setup lang="ts">
import RadialProgressBar from '@/components/Forms/RadialProgressBar.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import SGSTableDashboard from '@/components/Tables/SGSTableDashboard.vue'
import { Response } from '@/Helpers/Response'
import type { ApiResponse, HeaderTableController, TableCotnroller } from '@/Helpers/Types'
import { useGlobalStore } from '@/stores/global'
import Translate from '@/translate'
import { ref, type Ref } from 'vue'

const props = defineProps({
  title: String,
  tableData: Array<Object>
})

const emits = defineEmits(['refreshData'])

const request = useGlobalStore().request

const tableController: Ref<TableCotnroller> = ref({
  isLoading: false
})

const headerController: Ref<Array<HeaderTableController>> = ref([
  {
    field: 'ordem_servico',
    title: Translate.to('service-order'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'cliente',
    title: Translate.to('client'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'telefone',
    title: Translate.to('phone'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  },
  {
    field: 'actions',
    title: Translate.to('actions'),
    headerClass: 'flex flex-row gap-1 font-bold uppercase'
  }
])

const updateServiceOrder = async (id: number) => {
  await request
    .update(`/dashboard/${id}`)
    .then((res: ApiResponse) => {
      console.log(res)
      if (res.status) {
        Response.show('success', 'updated-service-date')
        emits('refreshData')
      } else {
        Response.show('error', '')
      }
    })
    .catch((err) => {
      Response.show('error', '')
    })
}
</script>
<template>
  <section
    class="border border-slate-200 dark:border-slate-900 shadow-md p-3 rounded h-full flex flex-col justify-start items-center"
  >
    <div class="flex flex-col text-center mx-auto items-center">
      <p class="text-2xl font-semibold">{{ props.title }}</p>
      <RadialProgressBar :number="props.tableData?.length" color="brown" />
    </div>
    <SGSDivider />
    <div class="w-full">
      <SGSTableDashboard
        :isLoading="tableController.isLoading"
        :result="props.tableData"
        :header="headerController"
        @updateData="updateServiceOrder"
      />
    </div>
  </section>
</template>
