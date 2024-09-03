const menuGroups = [
  {
    name: 'admin',
    permission: 'administrador',
    menuItems: [
      {
        icon: '',
        label: 'users',
        route: '',
        children: [
          { label: 'create', route: '/user/create' },
          { label: 'list', route: '/user/list' }
        ]
      },
      {
        icon: '',
        label: 'user-type',
        route: '',
        children: [
          { label: 'create', route: '/user/type/create' },
          { label: 'list', route: '/user/type/list' }
        ]
      },
      {
        icon: '',
        label: 'permission',
        route: '',
        children: [
          { label: 'create', route: '/permission/create' },
          { label: 'list', route: '/permission/list' },
          { label: 'add-permission', route: '/permission/add' }
        ]
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
        route: '',
        children: [
          { label: 'create', route: '/service-order/create' },
          { label: 'list', route: '/service-order/list' }
        ]
      },
      {
        icon: '',
        label: 'services',
        route: '',
        children: [
          { label: 'create', route: '/service/create' },
          { label: 'list', route: '/service/list' }
        ]
      },
      {
        icon: '',
        label: 'client',
        route: '',
        children: [
          { label: 'create', route: '/client/create' },
          { label: 'list', route: '/client/list' }
        ]
      },
      {
        icon: '',
        label: 'equipment',
        route: '',
        children: [
          { label: 'create', route: '/equipment/create' },
          { label: 'list', route: '/equipment/list' }
        ]
      },
      {
        icon: '',
        label: 'city',
        route: '',
        children: [
          { label: 'create', route: '/city/create' },
          { label: 'list', route: '/city/list' }
        ]
      }
    ]
  }
]

export default menuGroups
