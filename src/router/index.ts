import { createRouter, createWebHistory } from 'vue-router'
import Translate from '@/translate'
import LocalStorageController from '@/Helpers/LocalStorage'
import axios from 'axios'
import { useGlobalStore } from '@/stores/global'

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
  {
    path: '/service-order/:id',
    name: 'Editar ordem de serviços',
    component: () => import('@/views/ServiceOrder/ProfileServiceOrderView.vue'),
    meta: {
      title: "profile-service-order"
    }
  },
  /** ORDEM DE SERVICO */

  /** SERVICO */
  {
    path: '/service/create',
    name: 'Criar serviços',
    component: () => import('@/views/Service/CreateServiceView.vue'),
    meta: {
      title: 'create-service'
    }
  },
  {
    path: '/service/list',
    name: 'Listar serviços',
    component: () => import('@/views/Service/ListServiceView.vue'),
    meta: {
      title: 'list-service'
    }
  },
  /** SERVICO */

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
  }
  /** CIDADE */
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
  const request = useGlobalStore().request
  if (LocalStorageController.getToken()) {
    //@ts-expect-error
    request.setToken(LocalStorageController.getToken())
  }
  document.title = `${Translate.to(to.meta.title)} | SGS`

  switch (to.path) {
    case '/':
      ; (await checkTokenLogin()) ? next('/dashboard') : next()
      break
    default:
      ; (await checkTokenLogin()) ? next() : next('/')
      break
  }
})

export default router
