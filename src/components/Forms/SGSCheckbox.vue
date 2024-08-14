<script setup lang="ts">
import Translate from '@/translate'

const props = defineProps({
  label: String,
  reference: Object,
  referenceName: String
})
</script>
<template>
  <div class="flex flex-col w-full items-center">
    <label class="mb-0.5 block text-black dark:text-zinc-200">
      {{ Translate.to(props.label) }}
    </label>
    <hr class="dark:text-zinc-200 text-slate-200 mb-2 w-1/2" />
    <div
      v-if="props.reference![props.referenceName!]"
      @click="props.reference![props.referenceName!] = false"
      class="w-4/12 lg:w-1/12 inline-flex bg-emerald-600 text-white rounded-md items-center justify-center gap-2.5 py-1 px-4 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      {{ Translate.to('yes') }}
    </div>
    <span
      v-if="!props.reference![props.referenceName!]"
      @click="props.reference![props.referenceName!] = true"
      class="w-4/12 lg:w-1/12 inline-flex bg-red text-white rounded-md items-center justify-center gap-2.5 py-1 px-4 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      {{ Translate.to('no') }}
    </span>
  </div>
</template>
