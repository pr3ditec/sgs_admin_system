<script setup lang="ts">
/**
 * @description Componente para padronização dos layouts que involvem formularios
 * @active
 *
 * @interface Route Tipagem de props recebidas
 * @var props Valor recebido do componente pai
 */
import RouterButton from '@/components/Buttons/RouterButton.vue'
import type { PropType } from 'vue'

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
  <div class="w-5/6 flex flex-col mx-auto p-5 gap-5">
    <div v-if="push" class="flex flex-row ml-auto gap-1">
      <RouterButton :label="push?.label" :to="push?.to" />
    </div>
    <div v-if="back" class="flex flex-row mr-auto gap-1">
      <RouterButton :label="back?.label" :to="back?.to" />
    </div>
    <div class="mx-auto w-10/12">
      <slot name="body"></slot>
    </div>
    <div class="mx-auto w-5/12">
      <slot name="handler"></slot>
    </div>
  </div>
</template>
