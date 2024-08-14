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
//@ts-expect-error
import Multiselect from '@/vendor/vue3-multiselect/Multiselect.vue'
import Translate from '@/translate'

const props = defineProps({
  items: Array,
  label: String,
  required: Boolean,
  track: Object,
  reference: Object,
  referenceName: String,
  isDisabled: Boolean,
  isEmpty: Boolean,
  notFound: Boolean
})

const emits = defineEmits(['updateValue'])

const selectableValue = ref('')
watch(selectableValue, () => {
  if (selectableValue.value.length < 1) {
    props.reference![props.referenceName!] = 0
  } else {
    //@ts-expect-error
    const dataArray = selectableValue.value.map((data: any) => {
      return data[props.track!.field]
    })
    props.reference![props.referenceName!] = dataArray
  }
})
</script>
<template>
  <p class="mb-0 dark:text-zinc-200 text-black">
    {{ Translate.to(label) }}
    <i v-show="required" class="text-danger">*</i>
  </p>
  <hr class="dark:text-zinc-200 text-slate-200 mb-2 w-1/2" />
  <Multiselect
    v-if="props.items!.length"
    v-model="selectableValue"
    :options="props.items"
    :searchable="true"
    :placeholder="Translate.to('select-item')"
    :label="track!.name"
    :track-by="track!.field"
    :multiple="true"
  ></Multiselect>
  <p v-show="notFound" class="text-danger lowercase">{{ Translate.to('not-found') }}</p>
  <p v-show="isEmpty" class="text-danger lowercase">{{ Translate.to('empty-data') }}</p>
</template>
