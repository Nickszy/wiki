module.exports = {
    base:'/wiki/',
    title: "Nickszy's wiki",
    description: 'to ba a better fintecher',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/' },
            {
                text:'数据科学',
                items:[
                    { text:'RoadMap',link: '/datascience/'},
                    { text: '大数据', link: '/datascience/bigdata/' },
                    { text: '人工智能', link: '/datascience/ai/' }]
            },
            { text:'经济',link:'/world/'},
            { text: '区块链', link: '/blockchain/' },
            { text: '应用',link: '/app/'},
            { text: 'blog', link: 'https://blog.shenzheyu.com/'}

        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
        displayAllHeaders: true
    }
}