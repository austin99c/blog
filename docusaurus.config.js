// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '山雨欲来',
    tagline: '✨人类所有真实的快乐，一定是恒久的努力✨',
    url: 'https://doc.austin666.com/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'austin99c', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    plugins: [
        '@docusaurus/theme-live-codeblock',
        [
            '@docusaurus/plugin-content-blog',
            {
                id: 'second-blog',
                blogSidebarTitle: '近期杂谈',
                blogTitle: '技术杂谈',
                routeBasePath: 'chatter',
                path: './chatter',
                blogSidebarCount: 5,
                postsPerPage: 5
            },
        ]
    ],
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },
    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'referrer',
                content: 'no-referrer'
            }
        }
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    blogTitle: '博客',
                    blogSidebarTitle: '近期博文',
                    blogSidebarCount: 5,
                    showReadingTime: true,
                    postsPerPage: 5
                    // Please change this to your repo.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            docs: {
                sidebar: {
                    hideable: true
                }
            },
            announcementBar: {
                id: 'support_us',
                content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/austin99c/blog">GitHub</a>',
                backgroundColor: '#fafbfc',
                textColor: '#091E42',
                isCloseable: true,
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },
            navbar: {
                title: '技术之路',
                logo: {
                    src: "img/pen.svg",
                    href: "/",
                },
                hideOnScroll: true,
                items: [
                    {
                        type: 'dropdown',
                        position: 'right',
                        label: '👨🏻‍💻技术文章',
                        items: [
                            {
                                type: 'doc',
                                docId: 'Vue/模板语法',
                                label: 'Vue',
                            },
                            {
                                type: 'doc',
                                docId: 'Git/如何忽略.idea文件',
                                label: 'Git',
                            },
                            {
                                type: 'doc',
                                docId: 'Spring/什么是IOC',
                                label: 'Spring'
                            },
                            {
                                type: 'doc',
                                docId: 'MySQL/数据库驱动是如何加载的',
                                label: 'MySQL'
                            },
                        ]
                    },
                    {to: 'blog/npm全局安装的包文件所在的位置', label: '📗技术博客', position: 'right'},
                    {to: 'chatter/文章1', label: '📗技术杂谈', position: 'right'},
                    {
                        href: 'https://github.com/austin99c/blog',
                        // label: 'GitHub',
                        position: 'right',
                        className: "header-github-link",
                        "aria-label": "GitHub profile",
                    },
                    {
                        type: 'search',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                copyright: `Copyright © ${new Date().getFullYear()} Loner's Project, Inc.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                defaultLanguage: 'javascript',
                additionalLanguages: ['rust','java'],
            },
            colorMode: {
                respectPrefersColorScheme: true
            },
            algolia: {
                // The application ID provided by Algolia
                appId: '3E62FRBD5I',

                // Public API key: it is safe to commit it
                apiKey: 'b293c216d8fff5a99d1c662496ddee0d',

                indexName: 'austin666',
            }
        }),
};

module.exports = config;
