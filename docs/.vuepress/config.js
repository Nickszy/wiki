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
            { text: '金融', link: '/finance/' },
            { text: 'fintech',link:'/fintech/'},
            { text: 'Deploy', link:'/deploy/'},
            {
                text: '工具',
                items: [
                    { text: 'nodejs', link: '/code/nodejs.md' },
                    { text: 'map', link: '/code/map.md' },
                    ]
            },
            { text: 'blog', link: 'https://nickszy.github.io/'},
            { text: 'github' , link: 'https://github.com/nickszy'}
        ],
        sidebar: {
            '/datascience/': [
                '',
                {
                    title: 'python数据处理基础',
                    collapsable: false,
                    children: [
                        'numpy',
                        'pandas',
                    ]
                },
                {
                    title: '人工智能',
                    collapsable: false,
                    children: [
                        'ml_t',
                        'eda',
                        'ml_datapre',
                        'ml_traditional',
                        'ml_e',
                        'ml_math'
                    ]
                },
                {
                    title: '数据可视化',
                    collapsable: false,
                    children: [
                        'matplotlib',
                        'seaborn',
                        'pyecharts',
                        'plotly'
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
                        'timeseries',
                        'tushare2mysql',
                    ]
                }
            ], 
            '/python/': [
                '',
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        'python_data',
                        'python_def',
                        'python_package',
                        'time',
                        'magic_methods'
                    ]
                },
                {
                    title: 'web开发',
                    collapsable: false,
                    children: [
                        'django',
                        'django_restful',
                        'flask',
                        'fastapi'
                    ]
                },
                {
                    title: '爬虫',
                    collapsable: false,
                    children: [
                        'spider_readme',
                        'spider_fdmt',
                        'spider',
                        'Charles',
                    ]
                }, 
                {
                    title:'操作数据库',
                    collapsable:false,
                    children:[
                        'sqlalchemy',
                        'pandas+sqlalchemy',
                        'django_orm'
                    ]
                },
                {
                    title: '👉数据科学',
                    collapsable: false,
                    path: '/datascience/',
                    children: [
                        '/datascience/numpy',
                        '/datascience/pandas',
                        '/datascience/pyecharts',
                    ]
                },
                {
                    title: 'python进阶',
                    collapsable: false,
                    children: [
                        'aotoaction'
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
                '/finance/history/'
            ],
            '/fintech/':[
                '',
                '/fintech/blockchain/'
            ],
            '/deploy/':[
                '',
                'linux', 
                'mysql',
                'nginx',
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
            'vuepress-plugin-mathjax',
            {
                target: 'svg',
                macros: {
                    '*': '\\times',
                },
            },
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    const moment = require('moment')
                    moment.locale('zh-CN')
                    return moment(timestamp).format('llll'); 
                }
            }
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-120544317-3' // UA-00000000-0
            }
        ],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'FuWGLp2kf6Vm2SNmN9OjQuW5-gzGzoHsz',
                    appKey: 'tY4lCNf4VLbUHgtecebibARV',
                    avatar: 'robohash',
                    path: '<%- frontmatter.to.path %>',
                    recordIP: true,
                    visitor: true,
                    highlight: true,
                    placeholder:'快来写下你的想法吧'
                }
            }
        ]
    ]

}