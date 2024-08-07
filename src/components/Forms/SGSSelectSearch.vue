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
import { onMounted, ref, watch, type PropType, type Ref } from 'vue'
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

const itemsSearchable: Ref<Array<any>> = ref([])
const isVisibleList: Ref<boolean> = ref(<boolean>false)
const inputModel: Ref<string> = ref('')
const blockSearch: Ref<boolean> = ref(<boolean>false)

const closeModal = () => {
  //@ts-expect-error
  if (props.reference[props.referenceName] == 0) {
    isVisibleList.value = false
  }
}
const lockSearchArea = (value: boolean) => {
  blockSearch.value = value
}
const handleSelectedItem = (item: any) => {
  //@ts-expect-error
  props.reference[props.referenceName] = item.id

  lockSearchArea(true)
  inputModel.value = item.nome
  isVisibleList.value = false
}
const search = () => {
  if (blockSearch.value) {
    lockSearchArea(false)
    return
  }

  if (itemsSearchable.value.length > 1) {
    //@ts-expect-error
    props.reference[props.referenceName] = 0
    //@ts-expect-error
    itemsSearchable.value = props.items
    return true
  }

  //@ts-expect-error
  itemsSearchable.value = props.items?.filter((value: any) => {
    if (value.nome.toLowerCase().includes(inputModel.value.toLowerCase())) {
      return value
    }
  })
}
watch(inputModel, search)
onMounted(() => {
  itemsSearchable.value = props.items as Array<any>
})
</script>
<template>
  <p class="mb-0 dark:text-zinc-200 text-black">
    {{ Translate.to(label) }}
    <i v-show="required" class="text-danger">*</i>
  </p>
  <hr class="dark:text-zinc-200 text-slate-200 mb-2 w-1/2" />
  <div
    @blur="closeModal"
    class="w-full rounded border-[1.5px] text-black border-stroke font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark bg-white dark:bg-form-input dark:focus:border-primary"
  >
    <input
      @keyup.esc="isVisibleList = false"
      v-model="inputModel"
      @click="isVisibleList = true"
      :placeholder="Translate.to('type-here')"
      type="text"
      class="w-full rounded border-[1.5px] text-black py-3 px-5 border-stroke font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark bg-white dark:bg-form-input dark:focus:border-primary"
    />
    <div v-if="isVisibleList">
      <div
        @click="handleSelectedItem(item)"
        v-for="item in itemsSearchable"
        class="cursor-pointer w-full rounded border-[1.5px] text-black py-3 px-5 border-stroke font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark bg-white dark:bg-form-input dark:focus:border-primary"
      >
        {{
          //@ts-expect-error
          item[track?.name]
        }}
      </div>
    </div>
  </div>
  <p v-show="controller?.notFound" class="text-danger lowercase">{{ Translate.to('not-found') }}</p>
  <p v-show="controller?.isEmpty" class="text-danger lowercase">{{ Translate.to('empty-data') }}</p>
</template>
