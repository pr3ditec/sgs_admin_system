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
import { type PropType } from 'vue'
import type { SelectController, SelectObjectController } from '@/Helpers/Types'
import Translate from '@/translate'

const props = defineProps({
  items: Array,
  label: String,
  required: Boolean,
  track: Object as PropType<SelectObjectController>,
  controller: Object as PropType<SelectController>,
  clearData: Boolean,
  reference: Object,
  referenceName: String
})
</script>
<template>
  <p class="mb-0 dark:text-zinc-200 text-black">
    {{ Translate.to(label) }}
    <i v-show="required" class="text-danger">*</i>
  </p>
  <hr class="dark:text-zinc-200 text-slate-200 mb-2 w-1/2" />
  <select
    class="w-full rounded border-[1.5px] text-black border-stroke py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark bg-white dark:bg-form-input dark:focus:border-primary"
    :disabled="controller?.isDisabled"
    v-model="reference![referenceName!]"
  >
    <option disabled value="0">{{ Translate.to('select-item') }}</option>
    <option
      v-for="item in props.items"
      :value="
        //@ts-expect-error
        item[track?.field]
      "
    >
      {{
        //@ts-expect-error
        item[track?.name]
      }}
    </option>
  </select>
  <p v-show="controller?.notFound" class="text-danger lowercase">{{ Translate.to('not-found') }}</p>
  <p v-show="controller?.isEmpty" class="text-danger lowercase">{{ Translate.to('empty-data') }}</p>
</template>
