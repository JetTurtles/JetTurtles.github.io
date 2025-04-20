import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "JetTurtles",
    description: "欢迎来到我的博客！这里是我分享和记录我学习成果的地方。",
    themeConfig: {
        logo: '/images/logo.jpg',
        siteTitle: 'JetTurtles',
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Godot',
                items: [
                    {
                        text: 'GDScript基础',
                        link: '/godot/gdscript'
                    }
                ]
            }
        ],

        sidebar: [
            {
                text: 'Godot',
                items: [
                    {
                        text: 'GDScript基础',
                        link: '/godot/gdscript'
                    }
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
