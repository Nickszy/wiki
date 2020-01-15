module.exports = {
    base:'/wiki/',
    title: "Knowledge Base",
    description: 'to ba a better fintecher',
    head: [
        ['link', { rel: 'icon', href: '/jedi.jpg' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/' },
            {
                text:'数据科学',
                items:[
                    { text:'RoadMap',link: '/datascience/'},
                    { text: '一 初识数据科学', link: '/datascience/first_learn.md' },
                    { text: '二 机器学习（sklearn）', link: '/datascience/machine_learning.md' },
                    { text: '三 Kaggle实践', link: '/datascience/Kaggle.md' }
                ]
            },
            { text: '经济', link: '/finance/' },
            {
                text: 'fintech', 
                items: [
                    { text: '区块链', link: '/blockchain/' },
                    { text: '量化投资', link: '/blockchain/' },
                    { text: '智能投顾', link: '/app/aiinvest/' },
                ]
            },
            {
                text: '工具',
                items: [
                    { text: 'python', link: '/code/python.md' },
                    { text: 'django', link: '/code/django.md' },
                    { text: 'mysql', link: '/code/mysql.md' },
                    { text: 'pyecharts', link: '/code/pyecharts.md' },
                    { text: 'spider', link: '/code/spider.md' },
                    { text: 'nodejs', link: '/code/nodejs.md' },
                    ]
            },
            { text: 'blog', link: 'https://blog.shenzheyu.com/'}

        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
        displayAllHeaders: true,
        activeHeaderLinks: false,
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true
    },
    plugins:[
        '@vuepress/back-to-top',
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/pwa', { 
            updatePopup: true,
            serviceWorker: true
        }],
        '@vuepress/active-header-links'
    ]


}