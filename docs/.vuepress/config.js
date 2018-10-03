module.exports = {
  title: 'OHA Website',
  description: 'Documentation for www.ohiohospitals.org',
  serviceWorker: true,
  themeConfig: {
    // repo: 'Ohio-Hospital-Association/ohiohospitals.org',
    // editLinks: true,
    docsDir: 'docs',
    label: 'English',
    // selectText: 'Languages',
    // editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    searchMaxSuggestions: 15,
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    nav: [{
        text: 'Guides',
        link: '/guides/',
      },
      {
        text: 'Templates',
        link: '/templates/',
      },
      {
        text: 'Technical',
        link: '/technical/',
      }
      // {
      //   text: 'Config Reference',
      //   link: '/config/'
      // },
      // {
      //   text: 'Default Theme Config',
      //   link: '/default-theme-config/'z
      // },
      // {
      //   text: 'Changelog',
      //   link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
      // }
    ],
    //   sidebar: [{
    //     title: 'Guide',
    //     collapsable: true,
    //     children: [
    //       '',
    //       'guides/adding-page',
    //       'guides/page-metadata',
    //       'guides/editing-content',
    //       'guides/adding-contacts',
    //       'guides/adding-images',
    //       'guides/adding-resources'
    //     ]
    //   },
    //   {
    //     title: 'Page Templates',
    //     collapsable: false,
    //     children: [
    //       '',
    //       'home-page',
    //       'primary-landing',
    //       'secondary-landing',
    //       'tertiary-a',
    //       'tertiary-b',
    //       'tertiary-c',
    //       'tertiary-d',
    //       'tertiary-e',
    //       'hiin-a',
    //       'hiin-b',
    //       'hiin-c'
    //     ]
    //   }
    // ],
    sidebar: {
      '/guides/': [{
        title: 'Guide',
        collapsable: false,
        children: [
          '',
          'adding-page',
          'converting-page',
          'page-metadata',
          // 'editing-content',
          'adding-contacts',
          'adding-images',
          'adding-resources'
        ]
      }],
      '/templates/': [{
        title: 'Page Templates',
        collapsable: false,
        children: [
          '',
          'home-page',
          'primary-landing',
          'secondary-landing',
          'tertiary-a',
          // 'tertiary-b',
          // 'tertiary-c',
          // 'tertiary-d',
          // 'tertiary-e',
          'hiin-a',
          'hiin-b',
          'hiin-c'
        ]
      }]
    }
  }
}