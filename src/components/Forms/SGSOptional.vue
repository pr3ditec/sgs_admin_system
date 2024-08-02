<script setup lang="ts">
/**
 * @description Componente de renderização de dados optionais
 * @active
 */
import Translate from '@/translate'
import { ref, watch, type Ref } from 'vue'

const props = defineProps({
  label: String,
  reference: Object,
  refenceName: String
})

const emits = defineEmits(['mounted', 'destroy'])

const active: Ref<boolean> = ref(false)

watch(
  () => active.value,
  () => {
    if (active.value) {
      emits('mounted')
    } else {
      emits('destroy')
    }
  }
)
</script>
<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row justify-between items-center">
      <p class="cursor-pointer underline" @click="active = !active">
        {{ Translate.to(props.label) }}
      </p>
      <p v-show="active" class="cursor-pointer border p-1" @click="active = false">X</p>
    </div>
    <span v-if="active">
      <slot></slot>
    </span>
  </div>
</template>
