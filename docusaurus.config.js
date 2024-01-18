// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '山雨欲来',
    tagline: '✨人类所有真实的快乐，一定是恒久的努力✨',
    url: 'https://messiahhh.github.io/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'austin99c', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    plugins: ['@docusaurus/theme-live-codeblock'],
    i18n: {
        defaultLocale: 'zh-cn',
        locales: ['zh-cn'],
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
                    showReadingTime: true,
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
            navbar: {
                title: '编程技术体系',
                logo: {
                    src: "img/pen.svg",
                    href: "/",
                },
                hideOnScroll: true,
                items: [
                    {
                        type: 'dropdown',
                        position: 'right',
                        label: '👨🏻‍💻技术',
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
                        ]
                    },
                    {
                      type: 'doc',
                      position: 'right',
                      docId: 'Frame/index',
                      label: '框架'
                    },
                    {to: 'blog/面经', label: '📗面经', position: 'right'},
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
                additionalLanguages: ['rust'],
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
