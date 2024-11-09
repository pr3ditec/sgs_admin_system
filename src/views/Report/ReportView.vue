<script lang="ts" setup>
import type { ApiResponse } from '@/Helpers/Types'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useGlobalStore } from '@/stores/global'
import { onMounted, ref } from 'vue'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import Translate from '@/translate'

const request = useGlobalStore().request

const reportData = ref({})

const getData = async () => {
  await request.get('/relatorios').then((res: ApiResponse) => {
    console.log(res)
    if (res.status) {
      reportData.value = res.list as object
    } else {
    }
  })
}

const createTablePdf = (title: string, data: any) => {
  const doc = new jsPDF()

  const columns = Object.keys(data[0]).map((key) => ({ header: key, dataKey: key }))
  const row = data

  doc.text(title, 10, 10)
  autoTable(doc, {
    columns,
    body: row,
    startY: 20
  })

  doc.save(`${title}.pdf`)
}

onMounted(() => {
  Promise.all([getData()]).catch((err) => {
    console.log('Error on retrieving data')
  })
})
</script>
<template>
  <DefaultLayout>
    <div v-for="(item, index) in reportData" class="flex flex-row items-center gap-2">
      <span class="p-3 bg-emerald-300 w-1/2 text-black rounded mb-2">{{
        Translate.to(index)
      }}</span>
      <button class="p-2 underline" @click="createTablePdf(Translate.to(index), item)">
        download
      </button>
    </div>
  </DefaultLayout>
</template>
