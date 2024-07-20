<script setup lang="ts">
import DarkModeSwitcher from './DarkModeSwitcher.vue'
import DropdownMessage from './DropdownMessage.vue'
import DropdownNotification from './DropdownNotification.vue'
import DropdownUser from './DropdownUser.vue'
import HeaderHamburgerButton from './HeaderHamburgerButton.vue'
import HeaderLogoSmartphone from './HeaderLogoSmartphone.vue'
import LangModeSwitcher from './LangModeSwitcher.vue'
</script>

<template>
  <header
    class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none"
  >
    <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <!-- BOTAO DE QUANDO TELA ESTA REDUZIDA -->
        <HeaderHamburgerButton />
        <!-- BOTAO DE QUANDO TELA ESTA REDUZIDA -->

        <!-- LOGO COM TELA REDUZIDA -->
        <HeaderLogoSmartphone />
        <!-- LOGO COM TELA REDUZIDA -->
      </div>

      <div class="flex flex-row w-full justify-end gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
          <li>
            <LangModeSwitcher />
          </li>
          <li>
            <!-- Dark Mode Toggler -->
            <DarkModeSwitcher />
            <!-- Dark Mode Toggler -->
          </li>

          <!-- Notification Menu Area -->
          <!-- <DropdownNotification /> -->
          <!-- Notification Menu Area -->

          <!-- Chat Notification Area -->
          <!-- <DropdownMessage /> -->
          <!-- Chat Notification Area -->
        </ul>

        <!-- User Area -->
        <DropdownUser />
        <!-- User Area -->
      </div>
    </div>
  </header>
</template>
