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
 * @method watch metodo interno do vuejs utilizado para escutar quando uma variavel é alterada, neste caso ela limpa os dados
 * @method updateValue passa o valor para o componente pai
 */
import { ref, watch, type PropType } from 'vue'
import Multiselect from '@suadelabs/vue3-multiselect'
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css'
import type { SelectController, SelectObjectController } from '@/Helpers/Types'
import Translate from '@/translate'

const props = defineProps({
  items: Array,
  label: String,
  required: Boolean,
  track: Object as PropType<SelectObjectController>,
  controller: Object as PropType<SelectController>,
  clearData: Boolean
})

const emits = defineEmits(['updateValue'])

const selectableValue = ref('')

watch(
  () => props.clearData,
  () => {
    selectableValue.value = ''
  }
)
</script>
<template>
  <p class="mb-0">
    {{ Translate.to(label) }}
    <i v-show="required" class="text-danger">*</i>
  </p>
  <hr class="text-slate-200 mb-2 w-1/2" />
  <multiselect
    :disabled="controller?.isDisabled"
    v-if="props.items?.length"
    v-model="selectableValue"
    :options="props.items"
    class="custom-multiselect"
    :searchable="true"
    :placeholder="Translate.to('select-item')"
    :label="track?.name"
    :track-by="track?.field"
    @select="(selectedOption: any, id: any) => emits('updateValue', selectedOption[track?.field])"
    @remove="(removeOption: any, id: any) => emits('updateValue', 0)"
  ></multiselect>
  <p v-show="controller?.notFound" class="text-danger lowercase">{{ Translate.to('not-found') }}</p>
  <p v-show="controller?.isEmpty" class="text-danger lowercase">{{ Translate.to('empty-data') }}</p>
</template>
