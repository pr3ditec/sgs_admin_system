<script setup lang="ts">
import type { PropType } from 'vue'
import type { ButtonController } from '@/Helpers/Types'
import SGSLoading from '@/components/Loading/SGSLoading.vue'
import Translate from '@/translate'

const props = defineProps({
  label: String,
  overlayClass: String,
  controller: Object as PropType<ButtonController>
})
</script>

<template>
  <button
    :disabled="controller?.isDisabled"
    class="w-full inline-flex bg-primary text-white rounded-md items-center justify-center gap-2.5 py-3 px-8 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10"
    :class="props.overlayClass"
  >
    <SGSLoading v-show="controller?.isLoading" />
    <div v-show="!controller?.isLoading">
      <slot></slot>
    </div>
    {{ Translate.to(props.label) }}
  </button>
</template>
