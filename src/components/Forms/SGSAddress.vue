<script setup lang="ts"></script>
<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-row gap-2">
      <slot name="logradouro"></slot>
      <slot name="cep"></slot>
      <slot name="numero"></slot>
    </div>
    <slot name="cidade"></slot>
    <slot name="complemento"></slot>
  </div>
</template>
