<script setup lang="ts">
import LocalStorageController from '@/Helpers/LocalStorage'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useGlobalStore } from '@/stores/global'

const usuarioData = LocalStorageController.getUser()
</script>
<template>
  <DefaultLayout> Dashboardhome {{ usuarioData }} </DefaultLayout>
</template>
