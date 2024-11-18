<script setup lang="ts">
import swal from 'sweetalert'
import type { ApiResponse, OrdemServico } from '@/Helpers/Types'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useGlobalStore } from '@/stores/global'
import Translate from '@/translate'
import { onMounted, ref, type Ref } from 'vue'
import FullCalendarComponent from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { CalendarOptions } from '@fullcalendar/core/index.js'
import { useRouter } from 'vue-router'
import { openCalendarEditModal } from '@/Helpers/Calendar'
import FormLayout from '@/layouts/FormLayout.vue'

const router = useRouter()
const request = useGlobalStore().request

const serviceOrderData: Ref<Array<OrdemServico>> = ref([])

const calendarController = ref({
  isLoading: true
})

const calendarOptions: Ref<CalendarOptions> = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: {
    code: 'pt'
  },
  headerToolbar: {
    start: 'title',
    end: 'prev,next'
  },
  events: [{}],
  eventDisplay: 'list-item',
  eventClassNames: 'cursor-pointer',
  dateClick: () => handleDateClick(),
  eventClick: (evt) => handleEventClick(evt.event)
})

const getServiceOrderData = async () => {
  calendarController.value.isLoading = true
  await request
    .get('/calendario')
    .then((res: ApiResponse) => {
      if (res.status) {
        calendarOptions.value.events = res.list as Array<OrdemServico>
      }
    })
    .finally(() => {
      calendarController.value.isLoading = false
    })
}

const handleDateClick = () => {
  router.push('/service-order/create')
}

const handleEventClick = (evt: any) => {
  router.push(`/service-order/${evt._def.publicId}`)
}

onMounted(() => {
  Promise.all([getServiceOrderData()]).catch((err) => {
    console.log('Erro ao buscar dados de api')
  })
})
</script>
<template>
  <DefaultLayout>
    <!-- <FormLayout title="service-order"> -->
    <!-- <template #body> -->
    <FullCalendarComponent v-if="true" ref="calendar" :options="calendarOptions" />
    <!-- </template> -->
    <!-- </FormLayout> -->
  </DefaultLayout>
</template>
