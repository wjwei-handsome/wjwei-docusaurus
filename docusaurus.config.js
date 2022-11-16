// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// const mdxMermaid = require('mdx-mermaid');
// const mdxMermaid = [
//     require("mdx-mermaid"),
//     {
//         mermaid: {
//             theme: "dark",
//             themeVariables: {
//                 fontFamily: "Helvetica",
//             },
//             sequence: {
//                 actorFontFamily: "Helvetica",
//                 noteFontFamily: "Helvetica",
//                 messageFontFamily: "Helvetica",
//             },
//             journey: {
//                 taskFontFamily: "Helvetica",
//             },
//         },
//     },
// ]

async function CreateConfig() {
    const primaryColor = '#5391ba';
    const mdxMermaid = await
    import ('mdx-mermaid')
    /** @type {import('@docusaurus/types').Config} */
    const config = {
        title: 'WjWei | Blog',
        tagline: '&quot;My Beatuifal Dark Twisted Fantsty&quot;',
        url: 'https://www.wjwei.blog',
        baseUrl: '/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/favicon.ico',

        // GitHub pages deployment config.
        // If you aren't using GitHub pages, you don't need these.
        organizationName: 'maizego', // Usually your GitHub org/user name.
        projectName: 'wjwei-docusaurus', // Usually your repo name.

        // Even if you don't use internalization, you can use this field to set useful
        // metadata like html lang. For example, if your site is Chinese, you may want
        // to replace "en" with "zh-Hans".
        i18n: {
            defaultLocale: 'en',
            locales: ['en'],
        },

        presets: [
            [
                'classic',
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: require.resolve('./sidebars.js'),
                        // Please change this to your repo.
                        // Remove this to remove the "edit this page" links.
                        editUrl: 'https://github.com/wjwei-handsome/wjwei-docusaurus/tree/main/',
                        // docTagsListComponent: '@theme/DocTagsList',
                        remarkPlugins: [mdxMermaid.default],

                    },
                    blog: {
                        showReadingTime: true,
                        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
                            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
                        // Please change this to your repo.
                        // Remove this to remove the "edit this page" links.
                        editUrl: 'https://github.com/wjwei-handsome/wjwei-docusaurus/tree/main/',
                        blogSidebarTitle: 'All our posts',
                        blogDescription: 'This is a blog description',
                        blogTitle: 'My Site Blog',
                        blogSidebarCount: 'ALL',
                        blogTagsListComponent: '@theme/BlogTagsListPage',
                    },
                    theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                    sitemap: {
                        changefreq: 'weekly',
                        priority: 0.5,
                        ignorePatterns: ['/tags/**'],
                        filename: 'sitemap.xml',
                    },
                    gtag: {
                        trackingID: 'G-MMW29HLBNX',
                        // Optional fields.
                        anonymizeIP: true, // Should IPs be anonymized?
                    },
                }),
            ],
        ],

        themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
            navbar: {
                title: 'WjWei Blog',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/Avatar-s.png',
                    srcDark: 'img/Avatar-dark-s.png',
                    width: 48,
                    height: 48
                },
                items: [{
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: '📗Docs',
                    },
                    {
                        to: '/blog',
                        label: '👨🏻‍💻Blog',
                        position: 'left'
                    },
                    {
                        to: '/about-me',
                        label: '🏡About Me',
                        position: 'left'
                    },
                    {
                        href: 'https://github.com/wjwei-handsome/wjwei-docusaurus/',
                        // label: 'GitHub',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'Github repository',
                    },
                    {
                        type: 'dropdown',
                        label: '🎉Community',
                        position: 'left',
                        items: [{
                                label: 'Google Scholar',
                                href: 'https://scholar.google.com/citations?user=AO4Qqk4AAAAJ&',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/dUyetKKSbv',
                            },
                            {
                                label: "🔞SongtaoGui's Blog",
                                href: 'https://songtaogui.github.io/',
                            },
                            {
                                label: "💃JingyunLuo's Blog",
                                href: 'https://jingyunluo.github.io/',
                            }
                            // {
                            //     type: 'doc',
                            //     label: 'my-first-docs/doc-A',
                            //     docId: 'my-first-docs/doc-A',
                            // },
                            // ... more items
                        ],
                    },
                    {
                        type: 'search',
                        position: 'right',
                    },
                ],
                hideOnScroll: true,
                // style: 'primary'
            },
            footer: {
                style: 'dark',
                // links: [{
                //         title: 'Docs',
                //         items: [{
                //             label: 'my docs',
                //             to: '/docs/intro',
                //         }, ],
                //     },
                //     {
                //         title: 'Community',
                //         items: [{
                //                 label: 'Github',
                //                 href: 'https://github.com/wjwei-handsome/wjwei-docusaurus/',
                //             },
                //             {
                //                 label: 'Discord',
                //                 href: 'https://discord.gg/dUyetKKSbv',
                //             },
                //             {
                //                 label: 'Google Scholar',
                //                 href: 'https://twitter.com/docusaurus',
                //             },
                //         ],
                //     },
                //     {
                //         title: 'More',
                //         items: [{
                //                 label: 'Blog',
                //                 to: '/blog',
                //             },
                //             {
                //                 label: 'GitHub',
                //                 href: 'https://github.com/facebook/docusaurus',
                //             },
                //         ],
                //     },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} WenjieWei, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                magicComments: [
                    // Remember to extend the default highlight class name as well!
                    {
                        className: 'theme-code-block-highlighted-line',
                        line: 'highlight-next-line',
                        block: { start: 'highlight-start', end: 'highlight-end' },
                    },
                    {
                        className: 'code-block-error-line',
                        line: 'This will error',
                    },
                ],
                additionalLanguages: ['rust', 'r'],
            },
            docs: {
                sidebar: {
                    hideable: true,
                    // autoCollapseCategories: true,
                }
            },
            announcementBar: {
                id: 'supportus', // Any value that will identify this message.
                content: "If you like my blog, give me a <a target='_blank' rel='noopener noreferrer' href='https://github.com/wjwei-handsome/wjwei-docusaurus/'>star🌟</a>",
                backgroundColor: '#fafbfc',
                textColor: '#091E42',
                isCloseable: true,
            },
            // algolia: {
            //     // The application ID provided by Algolia
            //     appId: 'NZ1SNA604X',

            //     // Public API key: it is safe to commit it
            //     apiKey: 'a212e7276d322dbd37ddb204c81190c3',

            //     indexName: 'wwj-blog',

            //     // Optional: see doc section below
            //     contextualSearch: true,

            //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //     externalUrlRegex: 'external\\.com|domain\\.com',

            //     // Optional: Algolia search parameters
            //     searchParameters: {},

            //     // Optional: path for search page that enabled by default (`false` to disable it)
            //     searchPagePath: 'search',

            //     //... other Algolia params
            // },
            metadata: [
                { name: 'keywords', content: 'wjwei, blog, bioinfomatics' },
                { name: 'theme-color', content: primaryColor, media: "(prefers-color-scheme: light)" },
                { name: 'theme-color', content: primaryColor, media: "(prefers-color-scheme: dark)" }
            ],
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 4,
            }
        }),
        themes: [
            // ... Your other themes.
            [
                require.resolve("@easyops-cn/docusaurus-search-local"),
                {
                    // ... Your options.
                    // `hashed` is recommended as long-term-cache of index file is possible.
                    hashed: true,
                    // For Docs using Chinese, The `language` is recommended to set to:
                    // ```
                    language: ["en", "zh"],
                    indexPages: true,
                    // ```
                },
            ],
        ],
        plugins: [
            './plugins/my-loaders',
        ]
    };
    return config;
}



// module.exports = config;
module.exports = CreateConfig;