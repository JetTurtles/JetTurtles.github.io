import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/game/",
    {
        text: "博文",
        icon: "pen-to-square",
        prefix: "/posts/",
        children: [
            {
                text: "TypeScript基础",
                icon: "laptop-code",
                link: "typescript.md",
            }, {
                text: "CocosCreator基础",
                icon: "gamepad",
                link: "cocos.md",
            }, {
                text: "Blender基础",
                icon: "blender",
                link: "blender.md",
            },
        ],
    },
]);
