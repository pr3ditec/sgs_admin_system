import { createRouter, createWebHistory } from 'vue-router'

import SigninView from '@/views/Authentication/SigninView.vue'
import SignupView from '@/views/Authentication/SignupView.vue'
import BasicChartView from '@/views/Charts/BasicChartView.vue'
import FormElementsView from '@/views/Forms/FormElementsView.vue'
import FormLayoutView from '@/views/Forms/FormLayoutView.vue'
import SettingsView from '@/views/Pages/SettingsView.vue'
import TablesView from '@/views/TablesView.vue'
import AlertsView from '@/views/UiElements/AlertsView.vue'
import ButtonsView from '@/views/UiElements/ButtonsView.vue'
import Translate from '@/translate'
import LocalStorageController from '@/Helpers/LocalStorage'
import axios from 'axios'

const routes = [
  /** LOGIN */
  {
    path: '/',
    name: 'Pagina de login',
    component: () => import('@/views/Auth/LoginView.vue'),
    meta: {
      title: 'login'
    }
  },
  /** LOGIN */
  /** MAIN */
  {
    path: '/dashboard',
    name: 'Pagína inicial',
    component: () => import('@/views/Dashboard/DashboardHomeView.vue'),
    meta: {
      title: 'dashboard'
    }
  },
  /** MAIN */

  /** USUARIO */
  {
    path: '/user/create',
    name: 'Criação de usuários',
    component: () => import('@/views/Users/CreateUserView.vue'),
    meta: {
      title: 'create-user'
    }
  },
  {
    path: '/user/list',
    name: 'Lista de usuários',
    component: () => import('@/views/Users/ListUserView.vue'),
    meta: {
      title: 'list-user'
    }
  },
  /** USUARIO */

  /** TIPO USUARIO */
  {
    path: '/user/type/create',
    name: 'Criação de tipo usuários',
    component: () => import('@/views/UserType/CreateUserTypeView.vue'),
    meta: {
      title: 'create-type-user'
    }
  },
  {
    path: '/user/type/list',
    name: 'Lista de tipo usuários',
    component: () => import('@/views/UserType/ListUserTypeView.vue'),
    meta: {
      title: 'list-type-user'
    }
  },
  /** TIPO USUARIO */

  /** PERMISSOES */
  {
    path: '/permission/create',
    name: 'Criação permissões',
    component: () => import('@/views/Permission/CreatePermissionView.vue'),
    meta: {
      title: 'create-permission'
    }
  },
  {
    path: '/permission/list',
    name: 'Lista de permissões',
    component: () => import('@/views/Permission/ListPermissionView.vue'),
    meta: {
      title: 'list-permission'
    }
  },
  {
    path: '/permission/add',
    name: 'Adicionar permissões',
    component: () => import('@/views/Permission/AddPermissionView.vue'),
    meta: {
      title: 'add-permission'
    }
  },
  /** PERMISSOES */

  /** CALENDARIO */
  {
    path: '/services/calendar',
    name: 'Calendário de serviços',
    component: () => import('@/views/ServicesCalendar/ServicesCalendarView.vue'),
    meta: {
      title: 'services-calendar'
    }
  },
  /** CALENDARIO */

  /** ORDEM DE SERVICO */
  {
    path: '/service-order/create',
    name: 'Criar ordem de serviços',
    component: () => import('@/views/ServiceOrder/CreateServiceOrderView.vue'),
    meta: {
      title: 'create-service-order'
    }
  },
  {
    path: '/service-order/list',
    name: 'Listar ordem de serviços',
    component: () => import('@/views/ServiceOrder/ListServiceOrderView.vue'),
    meta: {
      title: 'list-service-order'
    }
  },
  /** ORDEM DE SERVICO */

  /** CLIENTE */
  {
    path: '/client/create',
    name: 'Criar cliente',
    component: () => import('@/views/Client/CreateClientView.vue'),
    meta: {
      title: 'create-client'
    }
  },
  {
    path: '/client/list',
    name: 'Listar clientes',
    component: () => import('@/views/Client/ListClientView.vue'),
    meta: {
      title: 'list-client'
    }
  },
  /** CLIENTE */

  /** APARELHO */
  {
    path: '/equipment/create',
    name: 'Criar aparelho',
    component: () => import('@/views/Equipment/CreateEquipmentView.vue'),
    meta: {
      title: 'create-equipment'
    }
  },
  {
    path: '/equipment/list',
    name: 'Listar equipamentos',
    component: () => import('@/views/Equipment/ListEquipmentView.vue'),
    meta: {
      title: 'list-equipment'
    }
  },
  /** APARELHO */

  /** CIDADE */
  {
    path: '/city/create',
    name: 'Criar cidade',
    component: () => import('@/views/City/CreateCityView.vue'),
    meta: {
      title: 'create-city'
    }
  },
  {
    path: '/city/list',
    name: 'Listar cidade',
    component: () => import('@/views/City/ListCityView.vue'),
    meta: {
      title: 'list-city'
    }
  },
  /** CIDADE */

  // ROTAS DO TEMPLATE
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('@/views/CalendarView.vue'),
    meta: {
      title: 'Calendar'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue'),
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/forms/form-elements',
    name: 'formElements',
    component: FormElementsView,
    meta: {
      title: 'Form Elements'
    }
  },
  {
    path: '/forms/form-layout',
    name: 'formLayout',
    component: FormLayoutView,
    meta: {
      title: 'Form Layout'
    }
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesView,
    meta: {
      title: 'Tables'
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings'
    }
  },
  {
    path: '/charts/basic-chart',
    name: 'basicChart',
    component: BasicChartView,
    meta: {
      title: 'Basic Chart'
    }
  },
  {
    path: '/ui-elements/alerts',
    name: 'alerts',
    component: AlertsView,
    meta: {
      title: 'Alerts'
    }
  },
  {
    path: '/ui-elements/buttons',
    name: 'buttons',
    component: ButtonsView,
    meta: {
      title: 'Buttons'
    }
  },
  {
    path: '/auth/signin',
    name: 'signin',
    component: SigninView,
    meta: {
      title: 'Signin'
    }
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: 'Signup'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

const checkTokenLogin = async (): Promise<boolean> => {
  const userToken = LocalStorageController.getToken()
  const isValidToken = await (await axios.get('http://127.0.0.1:8000/auth-check')).data.status
  
  if (userToken && isValidToken) {
    return true
  } else {
    return false
  }
}

router.beforeEach(async (to, from, next) => {
  document.title = `${Translate.to(to.meta.title)} | SGS`

  switch (to.path) {
    case '/':
      ;(await checkTokenLogin()) ? next('/dashboard') : next()
      break
    default:
      ;(await checkTokenLogin()) ? next() : next('/')
      break
  }
})

export default router
