<script setup lang="ts">
/**
 * @description Componente para padronização dos layouts que involvem formularios
 * @active
 *
 * @interface Route Tipagem de props recebidas
 * @var props Valor recebido do componente pai
 */
import RouterButton from '@/components/Buttons/RouterButton.vue'
import Translate from '@/translate'
import type { PropType } from 'vue'

const emits = defineEmits(['helper'])

interface Route {
  label: string
  to: string
}

const props = defineProps({
  title: String,
  push: Object as PropType<Route>,
  back: Object as PropType<Route>
})
</script>
<template>
  <main class="mt-0">
    <div class="flex flex-col w-10/12 mx-auto p-5 gap-5">
      <div class="flex flex-row ml-auto gap-1">
        <RouterButton v-if="push" :label="push?.label" :to="push?.to" />
        <RouterButton v-if="back" :label="back?.label" :to="back?.to" />
        <button @click="emits('helper')" class="p-2 text-2xl rounded-md border border-slate-500">
          ?
        </button>
      </div>
      <div class="mx-auto w-full">
        <slot name="body"></slot>
      </div>
      <div class="mx-auto w-5/12">
        <slot name="handler"></slot>
      </div>
    </div>
  </main>
</template>
