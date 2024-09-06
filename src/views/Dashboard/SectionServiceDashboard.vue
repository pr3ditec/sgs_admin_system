<script setup lang="ts">
import RadialProgressBar from '@/components/Forms/RadialProgressBar.vue'
import type { Parametros } from '@/Helpers/Types'
import type { PropType } from 'vue'

const props = defineProps({
  parametros: Object as PropType<Parametros>
})
</script>
<template>
  <section
    class="border border-slate-200 dark:border-slate-900 shadow-md p-3 rounded h-full flex flex-row justify-around items-center"
  >
    <div class="flex flex-col text-center">
      <RadialProgressBar
        title="Total de serviços"
        :number="props.parametros?.total_ordem_servico"
        color="#47b2b2"
      />
    </div>
    <div class="flex flex-col text-center">
      <RadialProgressBar
        title="No mês atual"
        :number="props.parametros?.mes_atual"
        color="#47b2b2"
      />
    </div>
    <div class="flex flex-col text-center">
      <RadialProgressBar
        title="Ultimos 30 dias"
        :number="props.parametros?.ultimos_30_dias"
        color="#47b2b2"
      />
    </div>
  </section>
</template>
