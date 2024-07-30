<script setup lang="ts">
import type { HelperController } from '@/Helpers/Types'
import Translate from '@/translate'
import { ref, type Ref } from 'vue'

/**
 * @description Botão de ajuda para que seja mostrado sobre as views
 * @active
 */

const isVisible: Ref<boolean> = ref(<boolean>false)
</script>
<template>
  <div class="flex flex-col gap-1">
    <a
      class="w-full ml-auto md:w-1/12 h-1/8 text-center text-black dark:text-zinc-300 dark:border-zinc-300 rounded-sm border border-slate-600 cursor-pointer font-bold uppercase"
      @mouseenter="isVisible = true"
      @mouseleave="isVisible = false"
      @click="isVisible = !isVisible"
      >?</a
    >
    <div v-show="isVisible" class="ml-auto">
      <span class="flex flex-row text-black dark:text-zinc-300">
        <p>{{ '*' }} : {{ Translate.to('required-field-helper') }}</p>
      </span>
    </div>
  </div>
</template>
