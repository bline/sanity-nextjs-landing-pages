export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6244807741a1c9143366714f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j7iax94d',
                  apiId: '3bba4f45-66fe-410c-af8f-0ff979082d57'
                },
                {
                  buildHookId: '624480777225412469ec15bf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w7oa6qhj',
                  apiId: '0f44ba0c-75c7-4631-80f7-a10517eaf79e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bline/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w7oa6qhj.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
