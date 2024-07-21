<script setup lang="ts">
/**
 * @description Componente de entrada de texto
 * @active
 *
 * @props Valores de entrada recebido pelo componente pai
 * @method emits Callback utilizada para alimentar componente pai com valores
 */
import Translate from '@/translate'

const props = defineProps({
  required: Boolean,
  reference: Object,
  referenceName: String
})

const emits = defineEmits(['updateValue'])
</script>

<template>
  <div>
    <label class="mb-0.5 block text-black dark:text-zinc-200">
      <span v-if="props.required" class="text-meta-1">*</span>
    </label>
    <hr class="dark:text-zinc-200 text-slate-200 mb-2 w-1/2" />
    <input
      :placeholder="Translate.to('search-here')"
      v-model="props.reference![props.referenceName!]"
      type="text"
      class="w-full rounded border-[1.5px] text-black border-stroke py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    />
  </div>
</template>
