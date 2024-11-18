<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import { storeToRefs } from 'pinia'
import Translate from '@/translate'
import { ref, watch, type Ref } from 'vue'

const props = defineProps({
  label: String,
  aparelhoSize: Number
})
const emits = defineEmits(['addItem', 'popItem'])

const itemController: Ref<boolean> = ref(<boolean>false)
const numberOfItemsController: Ref<number> = ref(<number>0)

const addItem = () => {
  itemController.value = true
  numberOfItemsController.value++
  emits('addItem')
}

const removeItem = () => {
  itemController.value = false
  emits('popItem')
}

const { closeModalEquipment } = storeToRefs(useGlobalStore())
watch(
  () => closeModalEquipment.value,
  () => {
    if (closeModalEquipment.value) {
      removeItem()
      useGlobalStore().setCloseModalEquipment(false)
    }
  }
)
</script>
<template>
  <div class="flex flex-row items-center">
    <label v-show="!itemController" @click="addItem" class="cursor-pointer underline">{{
      Translate.to(props.label)
    }}</label>
    <label v-show="itemController" @click="removeItem" class="ml-auto border p-2 cursor-pointer">
      X
    </label>
  </div>
  <div v-if="itemController" class="flex flex-col gap-1">
    <slot name="item"></slot>
  </div>
</template>
