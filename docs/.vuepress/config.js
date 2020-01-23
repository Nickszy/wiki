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
            { text: '数据科学', link:'/datascience/'},
            { text: '经济', link: '/finance/' },
            { text: 'fintech',link:'/fintech/'},
            { text: '历史', link:'/history/' },
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
        sidebar: {
            '/datascience/': [
                '',
                {
                    title: '数据建模和分析',
                    children: [
                        'numpy',
                        'pandas',
                        'sklearn'
                    ]
                },
                {
                    title: '数据可视化',
                    children: [
                        'matplotlib',
                        'seaborn',
                        'pyecharts'
                    ]
                },
                {
                    title:'大数据',
                    children:[
                        'hadoop',
                        'spark',
                        'kafka'
                    ]
                },
                {
                    title:'实战',
                    children:[
                        'kaggle'
                    ]
                }
            ],
            '/finance/':[
                '',
                {
                    title: '宏观经济',
                    children:[
                        'market'
                    ]
                },
                {
                    title: '金融市场与产品',
                    children:[
                        'market',
                        'financial_engineering',
                        'invest',
                    ]
                },
                {
                    title:'应用',
                    children:[
                        '/app/aiinvest/',
                        'quant'
                    ]
                },
                '/history/'
            ],
            '/fintech/':[
                '',
                '/datascience/',
                '/finance/',
                '/blockchain/'
            ]
        },
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