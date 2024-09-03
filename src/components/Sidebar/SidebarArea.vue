<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import menuItemGroups from '@/menu/index'
import SidebarItem from './SidebarItem.vue'
import SidebarHeaderLogo from './SidebarHeaderLogo.vue'
import SidebarReturnButton from './SidebarReturnButton.vue'
import Translate from '@/translate'
import LocalStorageController from '@/Helpers/LocalStorage'

const target = ref(null)

const sidebarStore = useSidebarStore()
const usuarioData = LocalStorageController.getUser()

onClickOutside(target, () => {
  sidebarStore.isSidebarOpen = false
})

const menuGroups: any = ref(menuItemGroups)
</script>

<template>
  <aside
    class="absolute left-0 top-0 z-9999 flex h-screen w-75.5 flex-col overflow-y-hidden bg-slate-800 duration-300 ease-linear lg:static lg:translate-x-0"
    :class="{
      'translate-x-0': sidebarStore.isSidebarOpen,
      '-translate-x-full': !sidebarStore.isSidebarOpen
    }"
    ref="target"
  >
    <!-- SIDEBAR HEADER -->
    <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <!-- SIDEBAR HEADER TAMANHO NORMAL -->
      <SidebarHeaderLogo />
      <!-- SIDEBAR HEADER TAMANHO NORMAL -->

      <!-- BOTAO DE FECHAR SIDEBAR EM MODO SMARTPHONE -->
      <SidebarReturnButton />
      <!-- BOTAO DE FECHAR SIDEBAR EM MODO SMARTPHONE -->
    </div>
    <!-- SIDEBAR HEADER -->

    <div class="overflow-scroll flex flex-col overflow-y-auto duration-300 ease-linear">
      <!-- Sidebar Menu -->
      <nav class="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
        <template v-for="menuGroup in menuGroups" :key="menuGroup.name">
          <div v-if="usuarioData.tipo.toLowerCase() == 'administrador'">
            <h3 class="mb-4 ml-4 text-md font-medium text-slate-300 uppercase">
              {{ Translate.to(menuGroup.name) }}
            </h3>

            <ul class="mb-6 flex flex-col gap-1.5 text-sm">
              <SidebarItem
                v-for="(menuItem, index) in menuGroup.menuItems"
                :item="menuItem"
                :key="index"
                :index="index"
              />
            </ul>
          </div>
          <div v-else-if="menuGroup.permission.toLowerCase() == usuarioData.tipo.toLowerCase()">
            <h3 class="mb-4 ml-4 text-md font-medium text-slate-300 uppercase">
              {{ Translate.to(menuGroup.name) }}
            </h3>

            <ul class="mb-6 flex flex-col gap-1.5 text-sm">
              <SidebarItem
                v-for="(menuItem, index) in menuGroup.menuItems"
                :item="menuItem"
                :key="index"
                :index="index"
              />
            </ul>
          </div>
        </template>
      </nav>
      <!-- Sidebar Menu -->
    </div>
  </aside>
</template>
