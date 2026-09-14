module.exports = {
    title: 'Chevereto V3 Docs',
    description: 'Documentation for Chevereto image hosting software (V3)',
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.svg`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#23a8e0'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logo.svg'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/logo.svg',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/logo.svg'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }],
        ['script', {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-WL8RV7RGEN',
        }],
        ['script', {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-WL8RV7RGEN');",
            ],
        ],

    ],
    themeConfig: {
        logo: '/logo.svg',
        docsRepo: 'chevereto/v3-docs',
        docsBranch: 'main',
        smoothScroll: false,
        editLinks: true,
        lastUpdated: true,
        sidebarDepth: 3,
        searchPlaceholder: 'Search',
        algolia: {
            apiKey: '49544d26dbc3a0d69593dac1d83f8ab1',
            indexName: 'chevereto',
            appId: 'DA09ED37YY',
        }
    },
    plugins: [
        [
            'vuepress-plugin-container',
            {
                type: 'v4',
                defaultTitle: '',
                before: `<div class="custom-block highlight"><p class="custom-block-title">🦄 Chevereto V4 users</p>`,
                after: '</div>',
            },
        ]
    ]
};
