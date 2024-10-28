<script setup lang="ts"></script>
<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-row w-full gap-2">
      <slot name="logradouro"></slot>
      <slot name="cidade"></slot>
      <slot name="numero"></slot>
    </div>
    <slot name="complemento"></slot>
  </div>
</template>
