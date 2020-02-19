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
            { text: 'python', link:'/python/'},
            { text: '经济', link: '/finance/' },
            { text: 'fintech',link:'/fintech/'},
            { text: 'Deploy', link:'/deploy/'},
            {
                text: '工具',
                items: [
                    { text: 'nodejs', link: '/code/nodejs.md' },
                    ]
            },
            { text: 'blog', link: 'https://nickszy.github.io/'},
            { text: 'github' , link: 'https://github.com/nickszy'}
        ],
        sidebar: {
            '/datascience/': [
                '',
                {
                    title: '数据建模和分析',
                    collapsable: false,
                    children: [
                        'numpy',
                        'pandas',
                        'sklearn'
                    ]
                },
                {
                    title: '数据可视化',
                    collapsable: false,
                    children: [
                        'matplotlib',
                        'seaborn',
                        'pyecharts'
                    ]
                },
                {
                    title: '大数据',
                    collapsable: false,
                    children: [
                        'hadoop',
                        'spark',
                        'kafka'
                    ]
                },
                {
                    title: '实战',
                    collapsable: false,
                    children: [
                        'kaggle',
                        'tushare2mysql'
                    ]
                }
            ], 
            '/python/': [
                '',
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        'python_fdmt',
                        'python_package',
                        'time&calender'
                    ]
                },
                {
                    title: 'python与数据处理',
                    collapsable: false,
                    children: [
                        '/datascience/',
                        'pyecharts'
                    ]
                },
                {
                    title: 'python网络',
                    collapsable: false,
                    children: [
                        'django',
                        'spider',
                        'pandas+sqlalchemy'
                    ]
                },
                {
                    title: 'python进阶',
                    collapsable: false,
                    children: [
                        'autoaction'
                    ]
                }
            ],
            '/finance/':[
                '',
                {
                    title: '宏观经济',
                    collapsable: false,
                    children:[
                        'market'
                    ]
                },
                {
                    title: '金融市场与产品',
                    collapsable: false,
                    children:[
                        'market',
                        'financial_engineering',
                        'invest',
                    ]
                },
                {
                    title:'应用',
                    collapsable: false,
                    children:[
                        '/fintech/aiinvest/',
                        'quant'
                    ]
                },
                '/history/'
            ],
            '/fintech/':[
                '',
                '/fintech/blockchain/'
            ],
            '/deploy/':[
                '',
                'linux',
                'nginx',
                'mysql',
            ]
        },
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
        activeHeaderLinks: false,
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true,
        lastUpdated: '上次更新'
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
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    const moment = require('moment')
                    moment.locale('zh-CN')
                    return moment(timestamp).format('llll'); 
                }
            }
        ]
    ]


}