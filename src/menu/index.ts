const menuGroups = [
  {
    name: 'admin',
    permission: 'administrador',
    menuItems: [
      {
        icon: '',
        label: 'users',
        route: '/user/list'
      },
      {
        icon: '',
        label: 'user-type',
        route: '/user/type/list'
      },
      {
        icon: '',
        label: 'permission',
        route: '/permission/list'
      }
    ]
  },
  {
    name: 'dashboard',
    permission: 'assinante',
    menuItems: [
      {
        icon: '',
        label: 'services-calendar',
        route: '/services/calendar'
      },
      {
        icon: '',
        label: 'service-order',
        route: '/service-order/list'
      },
      {
        icon: '',
        label: 'services',
        route: '/service/list'
      },
      {
        icon: '',
        label: 'client',
        route: '/client/list'
      },
      {
        icon: '',
        label: 'equipment',
        route: '/equipment/list'
      },
      {
        icon: '',
        label: 'city',
        route: '/city/list'
      }
    ]
  }
]

export default menuGroups
