<script setup lang="ts">
/**
 * @description Componente de botão para rotas push/back em <FormLayout>
 * @active
 *
 * @var props Valores que são passados via props pelo pai do componente
 */
import type { PropType, Ref } from 'vue'
import Translate from '@/translate'

const props = defineProps({
  label: String,
  to: String
})
</script>

<template>
  <router-link
    :to="props.to ?? '/'"
    class="inline-flex bg-primary text-white rounded-md items-center justify-center gap-1.5 py-2 px-3 text-center font-medium hover:bg-opacity-90 lg:px-4 xl:px-5"
  >
    <slot></slot>
    {{ Translate.to(props.label) }}
  </router-link>
</template>
