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
  /** DOCUMENTACAO A PARTIR DAQUI */
  // {
  //   name: 'menu',
  //   menuItems: [
  //     {
  //       icon: ``,
  //       label: 'dashboard',
  //       route: '#',
  //       children: [{ label: 'overview', route: '/' }]
  //     },
  //     {
  //       icon: `<svg
  //                   class="fill-current"
  //                   width="18"
  //                   height="18"
  //                   viewBox="0 0 18 18"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path
  //                     d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
  //                     fill=""
  //                   />
  //                 </svg>`,
  //       label: 'calendar',
  //       route: '/calendar'
  //     },
  //     {
  //       icon: ``,
  //       label: 'profile',
  //       route: '/profile'
  //     },
  //     {
  //       icon: `<svg
  //                   class="fill-current"
  //                   width="18"
  //                   height="18"
  //                   viewBox="0 0 18 18"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path
  //                     d="M1.43425 7.5093H2.278C2.44675 7.5093 2.55925 7.3968 2.58737 7.31243L2.98112 6.32805H5.90612L6.27175 7.31243C6.328 7.48118 6.46862 7.5093 6.58112 7.5093H7.453C7.76237 7.48118 7.87487 7.25618 7.76237 7.03118L5.428 1.4343C5.37175 1.26555 5.3155 1.23743 5.14675 1.23743H3.88112C3.76862 1.23743 3.59987 1.29368 3.57175 1.4343L1.153 7.08743C1.0405 7.2843 1.20925 7.5093 1.43425 7.5093ZM4.47175 2.98118L5.3155 5.17493H3.59987L4.47175 2.98118Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     d="M10.1249 2.5031H16.8749C17.2124 2.5031 17.5218 2.22185 17.5218 1.85623C17.5218 1.4906 17.2405 1.20935 16.8749 1.20935H10.1249C9.7874 1.20935 9.47803 1.4906 9.47803 1.85623C9.47803 2.22185 9.75928 2.5031 10.1249 2.5031Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     d="M16.8749 6.21558H10.1249C9.7874 6.21558 9.47803 6.49683 9.47803 6.86245C9.47803 7.22808 9.75928 7.50933 10.1249 7.50933H16.8749C17.2124 7.50933 17.5218 7.22808 17.5218 6.86245C17.5218 6.49683 17.2124 6.21558 16.8749 6.21558Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     d="M16.875 11.1656H1.77187C1.43438 11.1656 1.125 11.4469 1.125 11.8125C1.125 12.1781 1.40625 12.4594 1.77187 12.4594H16.875C17.2125 12.4594 17.5219 12.1781 17.5219 11.8125C17.5219 11.4469 17.2125 11.1656 16.875 11.1656Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     d="M16.875 16.1156H1.77187C1.43438 16.1156 1.125 16.3969 1.125 16.7625C1.125 17.1281 1.40625 17.4094 1.77187 17.4094H16.875C17.2125 17.4094 17.5219 17.1281 17.5219 16.7625C17.5219 16.3969 17.2125 16.1156 16.875 16.1156Z"
  //                     fill="white"
  //                   />
  //                 </svg>`,
  //       label: 'forms',
  //       route: '#',
  //       children: [
  //         { label: 'formElements', route: '/forms/form-elements' },
  //         { label: 'formLayout', route: '/forms/form-layout' }
  //       ]
  //     },
  //     {
  //       icon: `<svg
  //                   class="fill-current"
  //                   width="18"
  //                   height="19"
  //                   viewBox="0 0 18 19"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <g clip-path="url(#clip0_130_9756)">
  //                     <path
  //                       d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z"
  //                       fill=""
  //                     />
  //                   </g>
  //                   <defs>
  //                     <clipPath id="clip0_130_9756">
  //                       <rect width="18" height="18" fill="white" transform="translate(0 0.052124)" />
  //                     </clipPath>
  //                   </defs>
  //                 </svg>`,
  //       label: 'tables',
  //       route: '/tables'
  //     },
  //     {
  //       icon: `<svg
  //                   class="fill-current"
  //                   width="18"
  //                   height="18"
  //                   viewBox="0 0 18 18"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path
  //                     d="M14.2875 0.506226H3.7125C2.75625 0.506226 1.96875 1.29373 1.96875 2.24998V15.75C1.96875 16.7062 2.75625 17.5219 3.74063 17.5219H14.3156C15.2719 17.5219 16.0875 16.7344 16.0875 15.75V2.24998C16.0313 1.29373 15.2438 0.506226 14.2875 0.506226ZM14.7656 15.75C14.7656 16.0312 14.5406 16.2562 14.2594 16.2562H3.7125C3.43125 16.2562 3.20625 16.0312 3.20625 15.75V2.24998C3.20625 1.96873 3.43125 1.74373 3.7125 1.74373H14.2875C14.5688 1.74373 14.7938 1.96873 14.7938 2.24998V15.75H14.7656Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     d="M12.7965 2.6156H9.73086C9.22461 2.6156 8.80273 3.03748 8.80273 3.54373V7.25623C8.80273 7.76248 9.22461 8.18435 9.73086 8.18435H12.7965C13.3027 8.18435 13.7246 7.76248 13.7246 7.25623V3.5156C13.6965 3.03748 13.3027 2.6156 12.7965 2.6156ZM12.4309 6.8906H10.0684V3.88123H12.4309V6.8906Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     d="M4.97773 4.35938H7.03086C7.36836 4.35938 7.67773 4.07812 7.67773 3.7125C7.67773 3.34687 7.39648 3.09375 7.03086 3.09375H4.94961C4.61211 3.09375 4.30273 3.375 4.30273 3.74063C4.30273 4.10625 4.61211 4.35938 4.97773 4.35938Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     d="M4.97773 7.9312H7.03086C7.36836 7.9312 7.67773 7.64995 7.67773 7.28433C7.67773 6.9187 7.39648 6.63745 7.03086 6.63745H4.94961C4.61211 6.63745 4.30273 6.9187 4.30273 7.28433C4.30273 7.64995 4.61211 7.9312 4.97773 7.9312Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     d="M13.0789 10.2374H4.97891C4.64141 10.2374 4.33203 10.5187 4.33203 10.8843C4.33203 11.2499 4.61328 11.5312 4.97891 11.5312H13.0789C13.4164 11.5312 13.7258 11.2499 13.7258 10.8843C13.7258 10.5187 13.4164 10.2374 13.0789 10.2374Z"
  //                     fill=""
  //                   />
  //                   <path
  //                     d="M13.0789 13.8093H4.97891C4.64141 13.8093 4.33203 14.0906 4.33203 14.4562C4.33203 14.8218 4.61328 15.1031 4.97891 15.1031H13.0789C13.4164 15.1031 13.7258 14.8218 13.7258 14.4562C13.7258 14.0906 13.4164 13.8093 13.0789 13.8093Z"
  //                     fill=""
  //                   />
  //                 </svg>`,
  //       label: 'pages',
  //       route: '#',
  //       children: [{ label: 'settings', route: '/pages/settings' }]
  //     }
  //   ]
  // },
  // {
  //   name: 'others',
  //   menuItems: [
  //     {
  //       icon: `<svg
  //                   class="fill-current"
  //                   width="18"
  //                   height="19"
  //                   viewBox="0 0 18 19"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <g clip-path="url(#clip0_130_9801)">
  //                     <path
  //                       d="M10.8563 0.55835C10.5188 0.55835 10.2095 0.8396 10.2095 1.20522V6.83022C10.2095 7.16773 10.4907 7.4771 10.8563 7.4771H16.8751C17.0438 7.4771 17.2126 7.39272 17.3251 7.28022C17.4376 7.1396 17.4938 6.97085 17.4938 6.8021C17.2688 3.28647 14.3438 0.55835 10.8563 0.55835ZM11.4751 6.15522V1.8521C13.8095 2.13335 15.6938 3.8771 16.1438 6.18335H11.4751V6.15522Z"
  //                       fill=""
  //                     />
  //                     <path
  //                       d="M15.3845 8.7427H9.1126V2.69582C9.1126 2.35832 8.83135 2.07707 8.49385 2.07707C8.40947 2.07707 8.3251 2.07707 8.24072 2.07707C3.96572 2.04895 0.506348 5.53645 0.506348 9.81145C0.506348 14.0864 3.99385 17.5739 8.26885 17.5739C12.5438 17.5739 16.0313 14.0864 16.0313 9.81145C16.0313 9.6427 16.0313 9.47395 16.0032 9.33332C16.0032 8.99582 15.722 8.7427 15.3845 8.7427ZM8.26885 16.3083C4.66885 16.3083 1.77197 13.4114 1.77197 9.81145C1.77197 6.3802 4.47197 3.53957 7.8751 3.3427V9.36145C7.8751 9.69895 8.15635 10.0083 8.52197 10.0083H14.7938C14.6813 13.4958 11.7845 16.3083 8.26885 16.3083Z"
  //                       fill=""
  //                     />
  //                   </g>
  //                   <defs>
  //                     <clipPath id="clip0_130_9801">
  //                       <rect width="18" height="18" fill="white" transform="translate(0 0.052124)" />
  //                     </clipPath>
  //                   </defs>
  //                 </svg>`,
  //       label: 'charts',
  //       route: '#',
  //       children: [{ label: 'basicChart', route: '/charts/basic-chart' }]
  //     },
  //     {
  //       icon: `<svg
  //                   class="fill-current"
  //                   width="18"
  //                   height="19"
  //                   viewBox="0 0 18 19"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <g clip-path="url(#clip0_130_9807)">
  //                     <path
  //                       d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V7.53335C0.506348 8.4896 1.29385 9.2771 2.2501 9.2771H15.7501C16.7063 9.2771 17.4938 8.4896 17.4938 7.53335V2.3021C17.4938 1.34585 16.7063 0.55835 15.7501 0.55835ZM16.2563 7.53335C16.2563 7.8146 16.0313 8.0396 15.7501 8.0396H2.2501C1.96885 8.0396 1.74385 7.8146 1.74385 7.53335V2.3021C1.74385 2.02085 1.96885 1.79585 2.2501 1.79585H15.7501C16.0313 1.79585 16.2563 2.02085 16.2563 2.3021V7.53335Z"
  //                       fill=""
  //                     />
  //                     <path
  //                       d="M6.13135 10.9646H2.2501C1.29385 10.9646 0.506348 11.7521 0.506348 12.7083V15.8021C0.506348 16.7583 1.29385 17.5458 2.2501 17.5458H6.13135C7.0876 17.5458 7.8751 16.7583 7.8751 15.8021V12.7083C7.90322 11.7521 7.11572 10.9646 6.13135 10.9646ZM6.6376 15.8021C6.6376 16.0833 6.4126 16.3083 6.13135 16.3083H2.2501C1.96885 16.3083 1.74385 16.0833 1.74385 15.8021V12.7083C1.74385 12.4271 1.96885 12.2021 2.2501 12.2021H6.13135C6.4126 12.2021 6.6376 12.4271 6.6376 12.7083V15.8021Z"
  //                       fill=""
  //                     />
  //                     <path
  //                       d="M15.75 10.9646H11.8688C10.9125 10.9646 10.125 11.7521 10.125 12.7083V15.8021C10.125 16.7583 10.9125 17.5458 11.8688 17.5458H15.75C16.7063 17.5458 17.4938 16.7583 17.4938 15.8021V12.7083C17.4938 11.7521 16.7063 10.9646 15.75 10.9646ZM16.2562 15.8021C16.2562 16.0833 16.0312 16.3083 15.75 16.3083H11.8688C11.5875 16.3083 11.3625 16.0833 11.3625 15.8021V12.7083C11.3625 12.4271 11.5875 12.2021 11.8688 12.2021H15.75C16.0312 12.2021 16.2562 12.4271 16.2562 12.7083V15.8021Z"
  //                       fill=""
  //                     />
  //                   </g>
  //                   <defs>
  //                     <clipPath id="clip0_130_9807">
  //                       <rect width="18" height="18" fill="white" transform="translate(0 0.052124)" />
  //                     </clipPath>
  //                   </defs>
  //                 </svg>`,
  //       label: 'uiElements',
  //       route: '#',
  //       children: [
  //         { label: 'alerts', route: '/ui-elements/alerts' },
  //         { label: 'buttons', route: '/ui-elements/buttons' }
  //       ]
  //     },
  //     {
  //       icon: `<svg
  //                   class="fill-current"
  //                   width="18"
  //                   height="19"
  //                   viewBox="0 0 18 19"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <g clip-path="url(#clip0_130_9814)">
  //                     <path
  //                       d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
  //                       fill=""
  //                     />
  //                     <path
  //                       d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
  //                       fill=""
  //                     />
  //                   </g>
  //                   <defs>
  //                     <clipPath id="clip0_130_9814">
  //                       <rect width="18" height="18" fill="white" transform="translate(0 0.052124)" />
  //                     </clipPath>
  //                   </defs>
  //                 </svg>`,
  //       label: 'auth',
  //       route: '#',
  //       children: [
  //         { label: 'signIn', route: '/auth/signin' },
  //         { label: 'signUp', route: '/auth/signup' }
  //       ]
  //     }
  //   ]
  // }
]

export default menuGroups
