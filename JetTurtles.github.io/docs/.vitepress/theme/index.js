import DefaultTheme from 'vitepress/theme'

//引入自定义样式
import './custom.css'

//引入自定义组件
import HomeGames from '../../components/HomeGames.vue'

export default {
    extends: DefaultTheme,
    enhanceApp: ({app}) => {
        app.component('HomeGames', HomeGames);
    }
}