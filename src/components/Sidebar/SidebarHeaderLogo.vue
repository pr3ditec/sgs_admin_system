<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  w: String,
  h: String
})
</script>
<template>
  <RouterLink to="/">
    <img src="@/assets/images/logo/logo01.svg" alt="Logo" :width="props.w" :height="props.h" />
  </RouterLink>
</template>
