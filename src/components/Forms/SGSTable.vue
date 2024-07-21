<script setup lang="ts">
import Translate from '@/translate'
import swal from 'sweetalert'
import { useRouter } from 'vue-router'

const props = defineProps({
  search: String,
  result: Array
})
const emits = defineEmits(['deleteData', 'editData'])

const router = useRouter()
</script>
<template>
  <div class="flex flex-col gap-2 p-4 pt-0">
    <div
      class="cursor-pointer transition-all font-bold w-full mx-auto p-2 md:p-4 bg-slate-600 text-white rounded-lg shadow-md flex flex-row items-center justify-around gap-4 px-4"
    >
      <span class="w-60">{{ Translate.to('name') }}</span>
      <span class="w-40 collapse md:visible">{{ Translate.to('email') }}</span>
      <span class="w-40 collapse md:visible">{{ Translate.to('user-type') }}</span>
      <span class="w-20">{{ Translate.to('actions') }}</span>
    </div>
    <div
      v-if="result?.length == 0"
      class="cursor-pointer w-full mx-auto p-4 bg-neutral-50 dark:bg-slate-800 dark:text-zinc-200 rounded-lg shadow-md flex flex-row items-center justify-around gap-4 px-4"
    >
      {{ Translate.to('empty-table') }}
    </div>
    <div
      v-for="res in result as any"
      class="cursor-pointer transition-all duration-250 hover:border hover:translate-y-1 w-full mx-auto p-4 bg-neutral-50 dark:bg-slate-800 dark:text-zinc-200 rounded-lg shadow-md flex flex-row items-center justify-around gap-4 px-4"
    >
      <span class="w-60">{{ res.nome }}</span>
      <span class="w-40 collapse md:visible">
        {{ res.email }}
      </span>
      <span class="w-40 collapse md:visible">
        {{ res.tipo_usuario_nome }}
      </span>
      <span class="w-20 flex flex-row gap-2">
        <a @click="emits('editData', res.id)" class="text-sky-800 dark:text-sky-400 underline">{{
          Translate.to('edit')
        }}</a>
        <a
          @click="emits('deleteData', res.id)"
          class="text-black-600 dark:text-orange-600 underline"
          >{{ Translate.to('delete') }}</a
        >
      </span>
    </div>
  </div>
</template>
