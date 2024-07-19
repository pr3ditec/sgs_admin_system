<script setup lang="ts">
import type { PropType, Ref } from 'vue'
import SGSLoading from '@/components/Loading/SGSLoading.vue'
import Translate from '@/translate'

interface ButtonController {
  isLoading: boolean
  isDisabled: boolean
}

const props = defineProps({
  label: String,
  controller: Object as PropType<ButtonController>
})
</script>

<template>
  <button
    :disabled="controller?.isDisabled"
    class="w-full inline-flex bg-primary text-white rounded-md items-center justify-center gap-2.5 py-3 px-8 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10"
  >
    <SGSLoading v-show="controller?.isLoading" />
    <div v-show="!controller?.isLoading">
      <slot></slot>
    </div>
    {{ Translate.to(props.label) }}
  </button>
</template>
