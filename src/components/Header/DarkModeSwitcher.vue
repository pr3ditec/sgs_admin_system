<script setup lang="ts">
import { useDarkModeStore } from '@/stores/darkMode'
import IconLightMode from '../Icons/IconLightMode.vue'
import IconDarkMode from '../Icons/IconDarkMode.vue'

const darkModeStore = useDarkModeStore()
</script>

<template>
  <label
    :class="{ 'bg-purple-800': darkModeStore.darkMode, 'bg-stroke': !darkModeStore.darkMode }"
    class="relative m-0 block h-7.5 w-14 rounded-full"
    @click="darkModeStore.toggleDarkMode"
  >
    <input type="checkbox" class="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0" />
    <span
      :class="{ 'right-1 translate-x-full': darkModeStore.darkMode }"
      class="absolute top-1/2 left-1 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear"
    >
      <IconLightMode />
      <IconDarkMode />
    </span>
  </label>
</template>
