module.exports = {
    title: 'V3 Docs',
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
        }]
    ],
    themeConfig: {
        logo: '/logo.svg',
        docsRepo: 'chevereto/v3-docs',
        docsBranch: 'main',
        smoothScroll: true,
        editLinks: true,
        lastUpdated: true,
        algolia: {
            apiKey: '06052a1c5591ae720a8d2d7f98901d0d',
            indexName: 'chevereto',
            appId: 'DA09ED37YY',
        }
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'G-WL8RV7RGEN'
            }
        ],
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
