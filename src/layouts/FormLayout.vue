<script setup lang="ts">
/**
 * @description Componente para padronização dos layouts que involvem formularios
 * @active
 *
 * @interface Route Tipagem de props recebidas
 * @var props Valor recebido do componente pai
 */
import RouterButton from '@/components/Buttons/RouterButton.vue'
import SGSDivider from '@/components/Forms/SGSDivider.vue'
import Translate from '@/translate'
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
  <main class="bg-slate-200 dark:bg-slate-800 rounded-md shadow-lg p-2 mt-0">
    <div class="w-5/6 flex flex-col mx-auto p-5 gap-5">
      <div class="mt-0">
        <span class="text-black dark:text-zinc-300 font-medium text-2xl p-2 mb-0">{{
          Translate.to(props.title)
        }}</span>
        <hr class="mt-1 mb-5 w-10/12 text-slate-400" />
      </div>
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
  </main>
</template>
