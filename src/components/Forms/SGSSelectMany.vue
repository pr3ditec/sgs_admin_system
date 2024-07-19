<script setup lang="ts">
/**
 * @description Componente de seleção com opção de escrever o nome do campo para padronização de formulários
 * @active
 *
 * @param items é o array de objetos que sera adicionado ao seletor.
 * @param label é o item que será apresentado em cima do seletor
 * @param required define se o componente é obrigatório ( visualmente )
 * @param valueField é o nome do campo que possui o valor a ser utilizado para salvar em valueRef
 * @param valueName é o nome do campo que possui o nome a ser mostrado no item selecionado
 * @param isDisabled é o contralador que define se o cmapo esta desabilitado
 * @param isEmpty é o controlador caso os itens estejam vaizios
 * @param notFound é o controlador que define se os dados foram encontrados
 * @var selectableValue váriavel onde se encontra a referencia do valor de pesquisasa
 * @method updateValue passa o valor para o componente pai
 */
import { ref, watch } from 'vue'
import Multiselect from '@suadelabs/vue3-multiselect'
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css'

const props = defineProps({
  items: Array,
  label: String,
  required: Boolean,
  valueField: String,
  valueName: String,
  isDisabled: Boolean,
  isEmpty: Boolean,
  notFound: Boolean
})

const emits = defineEmits(['updateValue'])

const selectableValue = ref('')
watch(selectableValue, () => {
  if (selectableValue.value.length < 1) {
    emits('updateValue', 0)
  } else {
    const dataArray = selectableValue.value.map((data) => {
      return data[props.valueField]
    })
    emits('updateValue', dataArray)
  }
})
</script>
<template>
  <p class="mb-0">
    {{ $t(label) }}
    <i v-show="required" class="text-danger">*</i>
  </p>
  <hr class="mt-0 mb-1 w-2/4" />
  <multiselect
    v-if="props.items.length"
    v-model="selectableValue"
    :options="props.items"
    class="custom-multiselect"
    :searchable="true"
    :placeholder="$t('select-item')"
    :label="valueName"
    :track-by="valueField"
    :multiple="true"
  ></multiselect>
  <p v-show="notFound" class="text-danger lowercase">{{ $t('not-found') }}</p>
  <p v-show="isEmpty" class="text-danger lowercase">{{ $t('empty-data') }}</p>
</template>
