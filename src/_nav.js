export default {
  items: [
    // {
    //   name: 'Dashboard',
    //   url: '/dashboard',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW',
    //   },
    // },
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //   name: 'Colors',
    //   url: '/theme/colors',
    //   icon: 'icon-drop',
    // },
    // {
    //   name: 'Typography',
    //   url: '/theme/typography',
    //   icon: 'icon-pencil',
    // },
    {
      title: true,
      name: 'Plan Operativo Anual POA',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Formulacion',
      url: '/Formulacion',
      icon: 'icon-note',
      children: [
        {
          // name: 'Breadcrumbs',
          // url: '/base/breadcrumbs',
          // icon: 'icon-puzzle',
          name: 'Objetivos Gestion',
          url: '/Formulacion/ObjetivosGestion',
          icon: 'icon-doc',
        },
        {
          // name: 'Cards',
          // url: '/base/cards',
          // icon: 'icon-puzzle',
          name: 'Operaciones Funcionamiento',
          url: '/base/cards',
          icon: 'icon-doc',
        },
        {
          // name: 'Carousels',
          // url: '/base/carousels',
          // icon: 'icon-puzzle',
          name: 'Recursos Humanos',
          url: '/base/carousels',
          icon: 'icon-doc',
        },
        {
          // name: 'Collapses',
          // url: '/base/collapses',
          // icon: 'icon-puzzle',
          name: 'Servicios',
          url: '/base/collapses',
          icon: 'icon-doc',
        },
        {
          // name: 'Dropdowns',
          // url: '/base/dropdowns',
          // icon: 'icon-puzzle',
          name: 'Activos Fijos',
          url: '/base/dropdowns',
          icon: 'icon-doc',
        },
        {
          // name: 'Forms',
          // url: '/base/forms',
          // icon: 'icon-puzzle',
          name: 'Materiales y Suministros',
          url: '/base/forms',
          icon: 'icon-doc',
        },
        // {
        //   name: 'Jumbotrons',
        //   url: '/base/jumbotrons',
        //   icon: 'icon-puzzle',
        // },
        // {
        //   name: 'List groups',
        //   url: '/base/list-groups',
        //   icon: 'icon-puzzle',
        // },
        // {
        //   name: 'Navs',
        //   url: '/base/navs',
        //   icon: 'icon-puzzle',
        // },
        // {
        //   name: 'Paginations',
        //   url: '/base/paginations',
        //   icon: 'icon-puzzle',
        // },
        // {
        //   name: 'Popovers',
        //   url: '/base/popovers',
        //   icon: 'icon-puzzle',
        // },
        // {
        //   name: 'Progress Bar',
        //   url: '/base/progress-bar',
        //   icon: 'icon-puzzle',
        // },
        // {
        //   name: 'Switches',
        //   url: '/base/switches',
        //   icon: 'icon-puzzle',
        // },
        {
          name: 'Reporte Objetivos Gestion',
          url: '/Formulacion/tables',
          icon: 'icon-puzzle',
        },
        // {
        //   name: 'Tabs',
        //   url: '/base/tabs',
        //   icon: 'icon-puzzle',
        // },
        // {
        //   name: 'Tooltips',
        //   url: '/base/tooltips',
        //   icon: 'icon-puzzle',
        // },
      ],
    },
    {
      name: 'Seguimiento',
      url: '/buttons',
      icon: 'icon-cursor',
      // children: [
      //   {
      //     name: 'Buttons',
      //     url: '/buttons/buttons',
      //     icon: 'icon-cursor',
      //   },
      //   {
      //     name: 'Button dropdowns',
      //     url: '/buttons/button-dropdowns',
      //     icon: 'icon-cursor',
      //   },
      //   {
      //     name: 'Button groups',
      //     url: '/buttons/button-groups',
      //     icon: 'icon-cursor',
      //   },
      //   {
      //     name: 'Brand Buttons',
      //     url: '/buttons/brand-buttons',
      //     icon: 'icon-cursor',
      //   },
      // ],
    },
    // esto es lo demas del menu
  //   {
  //     name: 'Charts',
  //     url: '/charts',
  //     icon: 'icon-pie-chart',
  //   },
  //   {
  //     name: 'Icons',
  //     url: '/icons',
  //     icon: 'icon-star',
  //     children: [
  //       {
  //         name: 'CoreUI Icons',
  //         url: '/icons/coreui-icons',
  //         icon: 'icon-star',
  //         badge: {
  //           variant: 'info',
  //           text: 'NEW',
  //         },
  //       },
  //       {
  //         name: 'Flags',
  //         url: '/icons/flags',
  //         icon: 'icon-star',
  //       },
  //       {
  //         name: 'Font Awesome',
  //         url: '/icons/font-awesome',
  //         icon: 'icon-star',
  //         badge: {
  //           variant: 'secondary',
  //           text: '4.7',
  //         },
  //       },
  //       {
  //         name: 'Simple Line Icons',
  //         url: '/icons/simple-line-icons',
  //         icon: 'icon-star',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Notifications',
  //     url: '/notifications',
  //     icon: 'icon-bell',
  //     children: [
  //       {
  //         name: 'Alerts',
  //         url: '/notifications/alerts',
  //         icon: 'icon-bell',
  //       },
  //       {
  //         name: 'Badges',
  //         url: '/notifications/badges',
  //         icon: 'icon-bell',
  //       },
  //       {
  //         name: 'Modals',
  //         url: '/notifications/modals',
  //         icon: 'icon-bell',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Widgets',
  //     url: '/widgets',
  //     icon: 'icon-calculator',
  //     badge: {
  //       variant: 'info',
  //       text: 'NEW',
  //     },
  //   },
  //   {
  //     divider: true,
  //   },
  //   {
  //     title: true,
  //     name: 'Extras',
  //   },
  //   {
  //     name: 'Pages',
  //     url: '/pages',
  //     icon: 'icon-star',
  //     children: [
  //       {
  //         name: 'Login',
  //         url: '/login',
  //         icon: 'icon-star',
  //       },
  //       {
  //         name: 'Register',
  //         url: '/register',
  //         icon: 'icon-star',
  //       },
  //       {
  //         name: 'Error 404',
  //         url: '/404',
  //         icon: 'icon-star',
  //       },
  //       {
  //         name: 'Error 500',
  //         url: '/500',
  //         icon: 'icon-star',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Download CoreUI',
  //     url: 'http://coreui.io/react/',
  //     icon: 'icon-cloud-download',
  //     class: 'mt-auto',
  //     variant: 'success',
  //   },
  //   {
  //     name: 'Try CoreUI PRO',
  //     url: 'http://coreui.io/pro/react/',
  //     icon: 'icon-layers',
  //     variant: 'danger',
  //   },
   ],
};