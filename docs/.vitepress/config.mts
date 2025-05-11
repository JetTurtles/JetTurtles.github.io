import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "JetTurtles",
    description: "欢迎来到我的博客！这里是我分享和记录我学习成果的地方。",
    locales: {
        '/': {
            lang: 'zh-CN',
            label: '简体中文'
        }
    },
    themeConfig: {
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        darkModeSwitchLabel: '外观',
        outlineTitle: '本页内容',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        logo: '/images/logo.jpg',
        siteTitle: 'JetTurtles',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '游戏',
                items: [
                    {
                        text: 'GDScript 基础',
                        link: '/game/gdscript'
                    },
                    {
                        text: 'Spine 入门',
                        link: '/game/spine'
                    }
                ]
            }
        ],

        sidebar: [
            {
                text: '游戏',
                items: [
                    {
                        text: 'GDScript 基础',
                        link: '/game/gdscript'
                    },
                    {
                        text: 'Spine 入门',
                        link: '/game/spine'
                    }
                ]
            },
            {
                text: '后端',
                items: [
                    {
                        text: 'Linux 基础',
                        link: '/backend/linux'
                    },
                    {
                        text: 'Shell 基础',
                        link: '/backend/shell'
                    },
                ]
            }
        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/JetTurtles'
            }
        ],
    }
})
