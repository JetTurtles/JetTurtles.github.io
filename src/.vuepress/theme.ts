import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://jetturtles.github.io/",

    author: {
        name: "Aji",
        url: "https://jetturtles.github.io/",
    },

    repo: "JetTurtles/JetTurtles.github.io",

    docsDir: "src",

    logo: "/assets/images/JetTurtles.png",

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,



    // 博客相关
    blog: {
        name: "Aji",
        avatar: "/assets/images/author.png",
        description: "一位Java开发者和游戏爱好者",
        intro: "/intro.html",
        medias: {
            Gitee: "https://gitee.com/JetTurtles",
            GitHub: "https://github.com/JetTurtles",
        },
    },


    markdown: {
        align: true,
        attrs: true,
        codeTabs: true,
        component: true,
        demo: true,
        figure: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        plantuml: true,
        spoiler: true,
        stylize: [
            {
                matcher: "Recommended",
                replacer: ({tag}) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: {type: "tip"},
                            content: "Recommended",
                        };
                },
            },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,
    },

    // 在这里配置主题提供的插件
    plugins: {
        blog: true,


        components: {
            components: ["Badge", "VPCard"],
        },

        icon: {
            prefix: "fa6-solid:",
        },
    },
});
