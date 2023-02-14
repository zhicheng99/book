module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
   themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          {
            title: 'Group 1-1',
            collapsable: false,
            children: [
              '/'
            ]
          }
        ]
      },
      {
        title: 'Group 2',
        children: [ 
          ['/12121.md','第二个内容']
        ]
      }
    ]
  }
}