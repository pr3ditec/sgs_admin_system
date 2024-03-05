<script setup lang="ts">
import { computed } from 'vue'
import { useTranslateStore } from '@/stores/translate'
import IconBrazilianLang from '../Icons/IconBrazilianLang.vue'
import IconEnglishLang from '../Icons/IconEnglishLang.vue'

const translateStore = useTranslateStore()

/** FUNCOES */
const changeLang = () => {
  if (isPortuguese.value) {
    translateStore.setLang('en')
  } else {
    translateStore.setLang('pt')
  }
}
/** FUNCOES */

/** COMPUTED */
const isPortuguese = computed(() => {
  return translateStore.getLang == 'pt' ? true : false
})
/** COMPUTED */
</script>

<template>
  <label
    class="relative m-0 block h-7.5 w-14 rounded-full bg-stroke dark:bg-slate-700"
    @click="changeLang()"
  >
    <input type="checkbox" class="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0" />
    <span
      :class="{ 'right-1 translate-x-full': isPortuguese }"
      class="absolute top-1/2 left-1 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear"
    >
      <IconBrazilianLang v-show="isPortuguese" />
      <IconEnglishLang v-show="!isPortuguese" />
    </span>
  </label>
</template>
