<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import type { SearchController } from '@/Helpers/Types'
//@ts-expect-error
import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'
import Translate from '@/translate'
import swal from 'sweetalert'
import SGSInput from '@/components/Forms/SGSInput.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'

const props = defineProps({
  search: String,
  isLoading: Boolean,
  header: Array,
  result: Array
})
const emits = defineEmits(['updateData'])

const searchController: Ref<SearchController> = ref(<SearchController>{
  value: ''
})

const modalDeleteData = (id: Number) => {
  swal({
    icon: 'warning',
    text: Translate.to('update-service-order'),
    buttons: {
      confirm: {
        text: Translate.to('yes')
      }
    }
  }).then((res) => {
    if (res) {
      emits('updateData', id)
    }
  })
}
const router = useRouter()
</script>
<template>
  <SGSInput :reference="searchController" referenceName="value" />
  <SGSDivider />
  <Vue3Datatable
    rowClass="dark:bg-form-input dark:text-zinc-300 font-bold"
    skin="none"
    noDataContent="Nenhum dado disponível"
    paginationInfo="Mostrando dados recuperados"
    :sortable="true"
    :columns="props.header"
    :loading="props.isLoading"
    :rows="props.result"
    :search="searchController.value"
  >
    <template #actions="data">
      <div class="flex flex-row gap-1">
        <span class="cursor-pointer w-20 flex flex-row gap-2">
          <a
            @click="modalDeleteData(data.value.id)"
            class="cursor-pointer text-black-600 dark:text-blue-600 underline"
            >{{ Translate.to('mark-as-updated') }}</a
          >
        </span>
      </div>
    </template>
  </Vue3Datatable>
</template>
