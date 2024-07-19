import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'flatpickr/dist/flatpickr.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'
import Translate from './translate'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)

/** TRADUTOR */
app.config.globalProperties.$t = Translate.to
/** TRADUTOR */

app.mount('#app')
